import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import Index from '../page/Index.jsx'
import Layout from "../layout/Layout.jsx"
import Register from "../page/Register.jsx"
import Store from "../page/Store.jsx"
import Login from "../page/Login.jsx"
import Logout from "../page/Logout.jsx"
import Profile from "../page/Profile.jsx"
import Details from "../page/Details.jsx"
import CartContent from "../components/CartContent/CartContent.jsx"
import Admin from "../page/Admin.jsx"
import SearchPage from "../page/SearchPage.jsx"
import Pay from "../page/Pay.jsx"
import Blog from "../page/Blog.jsx"
import TipsAboutLuggage from "../page/TipsAboutLuggage.jsx"
import AmericaAndEurope from "../page/AmericaAndEurope.jsx"
import TravelingPets from "../page/TravelingPets.jsx"
import About from "../page/About.jsx"
import Trivia from "../components/TriviaBlog.jsx"







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
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/store',
                element: <Store />
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
                path: '/search',
                element: <SearchPage />
            },
            {
                path: '/pay/:total',
                element: <Pay />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/tipsAboutLuggage',
                element: <TipsAboutLuggage />
            },
            {
                path: '/americaAndEurope',
                element: <AmericaAndEurope />
            },
          
            {
                path: '/about',
                element: <About />
            },  
            {
                path: '/travelingPets',
                element: <TravelingPets />
            },
            {
                path: '/trivia',
                element: <Trivia />
            },



        ]
    }

])

export default Router
