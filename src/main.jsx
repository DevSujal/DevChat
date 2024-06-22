import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import {Form} from './pages'


const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path = "/" element = {<App />}>
      <Route path = "" element = {<div>Home</div>} />
      <Route path = "register" element = {<Form type = "register" />} />
      <Route path = "login" element = {<Form type='login'/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
