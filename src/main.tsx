import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { Index } from './routes/Index'
import { Whatsapp } from './routes/Whatsapp'
import { Instagram } from './routes/Instagram'

import "picnic/picnic.min.css"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/dm-ig",
    element: <Instagram />,
  },
  {
    path: "/dm-wa",
    element: <Whatsapp />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
