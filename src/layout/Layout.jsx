import Nav from '../layout/Nav.jsx'
import Footer from '../layout/Footer.jsx'
import { Outlet } from "react-router-dom";
import React from 'react'
import { DataProvider } from '../components/Context/DataContext.jsx';
import Products from '../components/Products/Products.jsx';

const Layout = () => {
  return (
    <>
      <DataProvider>
        <Nav />
        <Outlet />
        <Footer />
      </DataProvider>
    </>
  )
}

export default Layout;