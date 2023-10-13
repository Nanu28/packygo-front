import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Index from '../page/Index.jsx'
import Layout from "../layout/Layout.jsx"
import Register from "../page/Register.jsx"
import Store from "../page/Store.jsx"
import Login from "../page/Login.jsx"
import Details from "../page/Details.jsx"
import CartContent from "../components/CartContent/CartContent.jsx"
import Admin from "../page/Admin.jsx"
import SearchPage from "../page/SearchPage.jsx"
import Pay from "../page/Pay.jsx"




const  Router = createBrowserRouter([

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
                path: '/details/:_id',
                element: <Details />
              },
            {
                path: '/cart',
                element: <CartContent />
            },
            {  
                path: '/admin',
                element: <Admin />

            },
            {
             path: '/search' ,
             element: <SearchPage />
            },
            {
                path: '/pay/:total' ,
                element: <Pay/>
           }
            
           
        ]
    }

])

export default Router
