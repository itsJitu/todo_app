import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TodoList from './Component/TodoList'
import First from './Component/First'
import Todo from './Component/Todo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
    children: [
      {
        index: true,
        element: <TodoList />
      },
      {
        path: '/Todo',
        element: <Todo />
      },
      {
        path: '/TodoList',
        element: <TodoList /> 
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
