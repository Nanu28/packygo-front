import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Index from '../page/Index.jsx'
import Layout from "../layout/Layout.jsx"


const Router = createBrowserRouter([

    {
        path: "/",

        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />
            },
           
        ]
    }

])

export default Router
