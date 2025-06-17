import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tvshows from './pages/Tvshows'
import First from './pages/First'
import App from './App'
import Search from './pages/Search'
import SinglePages from './pages/SinglePages'
import { urls } from './data'

const router = createBrowserRouter([{ //browser ke URL ke basis pr pages change karta h (without reload)
    path: "/",
    element: <First />,
    children: [
        {
            index: true,
            element: <App />
        },
        {
            path: "/Movies",
            element: <Movies heading="Explore Movies" urls={[urls.topRatedMovies, urls.topRatedTvshows]} />
        },
        {
            path: "/Tvshows",
            element: <Tvshows />
        },
        // {
        //     path: "/search",
        //     element: <Search />
        // },
        {
            path: "/SinglePages/:id",
            element: <SinglePages />
        }

    ]
}])

function Router() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Router