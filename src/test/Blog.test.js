import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Blog from '../components/Blog'
let data
describe('<Blog>', () => {
  beforeAll(() => {
    data = {
      id:'12312',
      title:'Titulo',
      author:'juan Perez',
      url:'https://domain.test',
      likes:10,
      mockHandlerLikes:jest.fn(),
      mockHandlerRemove:jest.fn()
    }
  })

  test('render component only with title and author', async () => {
    const component = render(
      <Blog
        id={data.id}
        title={data.title}
        author={data.author}
        handleSetLikes={data.mockHandlerLikes}
        handleRemove={data.mockHandlerRemove}
      />)

    const button =  component.getByText('view')
    const title =  component.getByText(data.title)
    const titleBlogText = `${data.title} ${data.author}`.trim()
    const titleBlog =  component.getByText(titleBlogText)

    expect(button).toBeDefined()
    expect(titleBlog).toBeDefined()
    expect(title.parentElement).toHaveStyle('display:none')

  })
  test('render component when click on the botton view', () => {
    const component = render(
      <Blog
        id={data.id}
        title={data.title}
        author={data.author}
        url={data.url}
        likes={data.likes}
        handleSetLikes={data.mockHandlerLikes}
        handleRemove={data.mockHandlerRemove}

      />)
    const buttonView =  component.getByText('view')
    fireEvent.click(buttonView)
    const buttonHide =  component.getByText('hide')
    const url = component.getByText(data.url)
    const likes = component.getByText(data.likes)

    expect(buttonHide).toBeDefined()
    expect(url).toBeDefined()
    expect(likes).toBeDefined()
    expect(url.parentElement).toHaveStyle('display:inline-block')

  })

  test('render component when it do click twice on button like', () => {
    const component = render(
      <Blog
        id={data.id}
        title={data.title}
        author={data.author}
        url={data.url}
        likes={data.likes}
        handleSetLikes={data.mockHandlerLikes}
        handleRemove={data.mockHandlerRemove}

      />)
    //show button's like
    const buttonShow = component.getByText('view')
    fireEvent.click(buttonShow)

    const buttonLike = component.getByText('like')
    fireEvent.click(buttonLike)
    fireEvent.click(buttonLike)
    expect(data.mockHandlerLikes).toBeCalledTimes(2)
  })
})
