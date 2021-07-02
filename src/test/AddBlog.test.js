import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import AddBlog from '../components/AddBlog'

const mockHandlerAddBlog = jest.fn()
describe('<AddBlog />', () => {
  test('when it do click on the button ', () => {
    const data = {
      title:'Titulo',
      author:'Autor',
      url:'https://domanin.com'
    }
    const component = render(
      <AddBlog
        handleAddBlog={mockHandlerAddBlog}
      />
    )

    const form = component.container.querySelector('form')
    const title = component.container.querySelector('#title')
    const author = component.container.querySelector('#author')
    const url = component.container.querySelector('#url')
    //onChange title
    fireEvent.change(title,{
      target:{ value :data.title }
    })
    //onChange author
    fireEvent.change(author,{
      target:{ value :data.author }
    })

    //onChange url
    fireEvent.change(url,{
      target:{ value :data.url }
    })
    // onSubmit
    fireEvent.submit(form)
    const submitData = mockHandlerAddBlog.mock.calls[0][0]

    expect(mockHandlerAddBlog).toBeCalledTimes(1)
    expect(submitData.title).toEqual(data.title)
    expect(submitData.author).toEqual(data.author)
    expect(submitData.url).toEqual(data.url)

  })
})