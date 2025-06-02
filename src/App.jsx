import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tvshows from './pages/Tvshows'
import First from './pages/First'

const router = createBrowserRouter([{
  page: "/",
  element: <First />,
  children: [
    {
      index: true,
      element: <Home />
    }, {
      path: "/Movies",
      element: <Movies />
    }, {
      path: "/Tvshows",
      element: <Tvshows />
    }
  ]
}])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App