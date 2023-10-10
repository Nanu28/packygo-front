import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Index from '../page/Index.jsx'
import Layout from "../layout/Layout.jsx"
import Register from "../page/Register.jsx"
import Store from "../page/Store.jsx"
import Login from "../page/Login.jsx"
import Details from "../page/Details.jsx"
import Admin from "../page/Admin.jsx"



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
                path: '/login',
                element: <Login/>
            },
            {
                path: '/store',
                element: <Store/>
            },
            {
                path: '/details',
                element: <Details />

            },
            {
                path: '/admin',
                element: <Admin />

            },
            
           
        ]
    }

])

export default Router
