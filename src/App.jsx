import { useState } from 'react'
import MainPage from './Pages/MainPage'
import MainPageDashboard from './Pages/MainPageDashboard'
import './App.css'
import TransactionPage from './Pages/TransactionPage'
import UserExpense from './components/UserExpense';
// import UserExpense from '../'
import Dashboard from './components/Dashboard'
import Card from './components/Card/Card'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Rrouter = createBrowserRouter([
  {
    path:"/",
    element:<MainPageDashboard/>,
    children : [
      {
        index : true,
        element : <Dashboard />
      },
      {
        path : "/expenses",
        element : <UserExpense/>
      },{
        path : "/transaction",
        element : <TransactionPage/>
      },{
        path :"/card",
        element : <Card/>
      }
    ]
  }
]);

function App() {
 

  return (
    <>
      <RouterProvider router = {Rrouter}/>
    </>
  )
}

export default App
