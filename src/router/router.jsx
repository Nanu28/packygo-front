import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Index from '../page/Index.jsx'
import Layout from "../layout/Layout.jsx"
import Register from "../page/Register.jsx"
import Store from "../page/Store.jsx"


const Router = createBrowserRouter([

    {
        path: "/",

        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/store',
                element: <Store />
            },
           
        ]
    }

])

export default Router
