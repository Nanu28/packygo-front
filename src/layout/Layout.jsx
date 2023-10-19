

import Nav from '../layout/Nav.jsx'
import Footer from '../layout/Footer.jsx'
import { Outlet } from "react-router-dom";
import React from 'react'

const Layout = () => {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout;