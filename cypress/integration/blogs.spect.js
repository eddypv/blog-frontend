describe('Blog App', () => {
  beforeEach(() => {
    cy.resetData()
    cy.visit('http://localhost:3000')
  })

  it('Login from is show', () => {
    cy.get('label').first().should('contain','username')
    cy.get('label').last().should('contain','password')
    cy.get('form button').should('contain', 'Login')
  })
  const user = {
    name:'Juan Perez',
    username:'juan.perez',
    password:'juan.perez'
  }
  describe('Login', () => {

    beforeEach(() => {
      cy.resetData()
      cy.createUser(user.name, user.username, user.password)
      cy.visit('http://localhost:3000')
    })

    it('succeeds with correct credentials', () => {
      // command Login
      cy.get('input[type="text"]').type(user.username)
      cy.get('input[type="password"]').type(user.password)
      cy.get('form button').click()
      cy.get('button').should('contain', 'Logout')
    })
    it('fails with wrong credentials', () => {
      cy.get('input[type="text"]').type('user')
      cy.get('input[type="password"]').type('user')
      cy.get('form button').click()
      cy.get('.Notification').should('have.class', 'error')
    })
  })
  describe('When logged in', () => {
    const newBlog = {
      title:'tittuoi',
      author:'autor',
      url:'http://domain.test'
    }
    beforeEach(() => {
      cy.resetData()
      cy.createUser(user.name, user.username, user.password)
      cy.login(user.username, user.password)
      cy.visit('http://localhost:3000')
    })
    it('A blog can be created', () => {

      cy.get('.togglable-button-show').click()
      cy.get('#title').type(newBlog.title)
      cy.get('#author').type(newBlog.author)
      cy.get('#url').type(newBlog.url)
      cy.get('form button').click()

      cy.get('.Notification').should('have.class', 'success')
      cy.get('.Blog-item').last().should('contain', `${newBlog.title} ${newBlog.author}`)

    })
    it('A blog can not be created', () => {
      cy.get('.togglable-button-show').click()
      cy.get('#title').type(newBlog.title)
      cy.get('#author').type(newBlog.author)
      cy.get('#url').type('url')
      cy.get('form button').click()
      cy.get('.Notification').should('have.class', 'error')


    })
    it('A blog can be like', () => {
      cy.createBlog(newBlog.title, newBlog.author, newBlog.url)
      cy.get('.Blog-item button').should('contain', 'view')
      cy.get('.Blog-item button').contains('view').click()
      cy.get('.Blog-item button').contains('like').click()
      cy.get('.Blog-item button').contains('like').parent().should('contain', '1')
    })

    it('A blog can be remove', () => {
      cy.createBlog(newBlog.title, newBlog.author, newBlog.url)
      cy.get('.Blog-item button').should('contain', 'view')
      cy.get('.Blog-item button').contains('view').click()
      cy.get('.Blog-item button').contains('Remove').click()
      cy.get('.Notification').should('have.class', 'success')
      cy.get('.Blog-item').should('have.length', 0)

    })

    it('verify blogs ordered by likes', () => {
      const blogs = [
        { title:'titulo1', author:'author1', url:'https://domain.com', likes:4 },
        { title:'titulo2', author:'author2', url:'https://domain.com', likes:2 },
        { title:'titulo3', author:'author3', url:'https://domain.com', likes:3 }
      ]
      cy.createBlog(blogs[0].title, blogs[0].author, blogs[0].url, blogs[0].likes)
      cy.createBlog(blogs[1].title, blogs[1].author, blogs[1].url, blogs[1].likes)
      cy.createBlog(blogs[2].title, blogs[2].author, blogs[2].url, blogs[2].likes)

      cy.get('.Blog-item').should('have.length',3)
      cy.get('.button-show-hide').click({ multiple:true })
      cy.get('[data-testid="Blog-likes"] span').then(($btn) => {
        const listLikes = []
        $btn.map((index, elem) => {
          const value = Number(elem.textContent.toString())
          listLikes[index] = value
        })
        const copyLikes = listLikes.map(value => value)
        listLikes.sort((value1, value2) => {
          return value1 - value2
        })
        expect(listLikes).to.eql(copyLikes)
      })
    })
  })

})