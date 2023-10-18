import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/router.jsx'
import App from './App.jsx'
import ProductProvider from './components/Context/ProductProvider.jsx'
import { DataContext, DataProvider } from './components/Context/DataContext.jsx';






ReactDOM.createRoot(document.getElementById('root')).render(
 
     <DataProvider>
      <ProductProvider>
         <RouterProvider router={Router} />
      </ProductProvider>
      </DataProvider>

 
)
