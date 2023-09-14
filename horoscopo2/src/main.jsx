import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './User.jsx'
import Admin from './Admin.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/User",
    element: <User />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
