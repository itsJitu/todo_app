import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TodoListt from './Component/TodoListt'
import Firstt from './Component/First'
import Todoo from './Component/Todoo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Firstt />,
    children: [
      {
        index: true,
        element: <TodoListt />
      },
      {
        path: '/todo',
        element: <Todoo />
      },
      {
        path: '/todoList',
        element: <TodoListt /> 
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
