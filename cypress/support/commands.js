
const API_REST ='http://localhost:3003'

Cypress.Commands.add('resetData', () => {
  cy.request('POST', `${API_REST}/api/testing/reset`)
})

Cypress.Commands.add('createUser', (name, username, password) => {
  cy.request('POST', `${API_REST}/api/users`, { name, username, password })
})

Cypress.Commands.add('createBlog', (title, author, url, likes=0) => {
  const token = JSON.parse(window.localStorage.getItem('AppBlogList')).token
  const options = {
    url:`${API_REST}/api/blogs`,
    method:'POST',
    body:{ title, author, url, likes },
    headers:{ Authorization:`Bearer ${token}` }
  }
  cy.request(options)
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('login', (username, password) => {
  cy.request('POST', `${API_REST}/api/login/`, { username, password })
    .then(data => {
      console.log(data.body)
      window.localStorage.setItem('AppBlogList', JSON.stringify(data.body))
    })
})

