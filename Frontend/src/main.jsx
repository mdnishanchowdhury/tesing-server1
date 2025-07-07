import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users';
import UserInfo from './components/UserInfo';
import Update from './components/Update';

const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users></Users>
  },
  {
    path:'/user',
    element:<UserInfo></UserInfo>,
    loader:()=>fetch('http://localhost:5000/users')
  },
   {
    path: "/update/:id",
    element: <Update></Update>,
    loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
