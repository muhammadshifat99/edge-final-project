import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx';
import Bannerlayout from './Components/Bannerlayout/Bannerlayout.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statictis from './Components/Statictis/Statictis.jsx';
import Details from './Components/Details/Details.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Wish from './Components/Wish/Wish.jsx';
import Errorpage from './Components/Errorpage/Errorpage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement : <Errorpage></Errorpage>,
    children:[
      {
        path: '/',
        element: <Bannerlayout></Bannerlayout>,
        errorElement : <Errorpage></Errorpage>
      },
      {
        path: '/statictis',
        element: <Statictis></Statictis>,
        errorElement : <Errorpage></Errorpage>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement : <Errorpage></Errorpage>,
        children:[
          {
            path: '/dashboard',
            loader :()=> fetch('../data.json'),
            element: <Cart></Cart>,
            errorElement : <Errorpage></Errorpage>
          },
          {
            path: '/dashboard/wishlist',
            loader :()=> fetch('../data.json'),
            element: <Wish></Wish>,
            errorElement : <Errorpage></Errorpage>
          }
        ]
      },
      {
        path: 'product/:id',
        loader :({params})=> fetch('../data.json'),
        element:<Details></Details>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
