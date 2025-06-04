import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tvshows from './pages/Tvshows'
import First from './pages/First'
import App from './App'

const router = createBrowserRouter([{
  path: "/",
  element: <First />,
  children: [
    {
      index: true,
      element: <App />
    },
     {
      path: "/Movies",
      element: <Movies />
    },
     {
      path: "/Tvshows",
      element: <Tvshows />
    }
  ]
}])

function Router() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Router