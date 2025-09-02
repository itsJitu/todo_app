import { useState } from 'react'

import TodoList from './Component/todoList';
import First from './Component/First'
import Todo from './Component/todo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



 
  const router = createBrowserRouter([
    {
      path:'/',
      element: <First/>,

      children: [
        {
          index: true,
          element: <TodoList />
        },
        {
          path:'/todo',
          element: <Todo />
        },
        {
          path: '/todoList',
          element: <todoList />
        },
      ]
    }
  ])

  function App() {
    return <RouterProvider router = {router} />
  }

export default App
