import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blogs from '../components/Blogs'
import '@testing-library/jest-dom/extend-expect'
let data = {}
let defaultUser ={}

describe('<Blogs />', () => {
  defaultUser = { username:'eddy.perez' }
  data ={
    blogs:[
      { id:'12313', title:'Titulo', url:'https:domain.com',author:'Autor', user:defaultUser, likes:12 },
    ],
    mockHandlerLikes:jest.fn(),
    mockHandlerRemove:jest.fn()
  }
  test('render component with user logged in', () => {
    const component = render(
      <Blogs
        blogs={data.blogs}
        handleRemove={data.mockHandlerRemove}
        handleSetLikes={data.mockHandlerLikes}
        user={defaultUser}
      />)
    const title = component.getByText(data.blogs[0].title)
    expect(title).toBeDefined()
  })
  test('render component without user', () => {
    const component = render(
      <Blogs
        blogs={data.blogs}
        handleRemove={data.mockHandlerRemove}
        handleSetLikes={data.mockHandlerLikes}
        user={{}}
      />)
    const title = component.getByText(data.blogs[0].title)
    expect(title).toBeDefined()
  })
  test('render component without user and blogs', () => {
    const component = render(
      <Blogs
        blogs={[]}
        handleRemove={data.mockHandlerRemove}
        handleSetLikes={data.mockHandlerLikes}
        user={{}}
      />)

  })
  test('render component without user and with blogs by default', () => {
    const component = render(
      <Blogs
        handleRemove={data.mockHandlerRemove}
        handleSetLikes={data.mockHandlerLikes}
        user={{}}
      />)

  })
})