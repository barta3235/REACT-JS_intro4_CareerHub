import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/Home.jsx'
import Root from './components/root/Root.jsx'
import AppliedJobs from './components/appliedJobs/AppliedJobs.jsx'
import ErrorPage from './components/errorPage/ErrorPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/jobDetails/JobDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../public/jobs.json'),
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('../public/jobs.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
