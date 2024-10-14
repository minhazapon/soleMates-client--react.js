import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Shop from './shop file/Shop';
import About from './page file/About';
import Add from './crud file/Add';
import Read from './crud file/Read';
import Update from './crud file/Update';
import Login from './firebase and login/Login';
import SignUp from './firebase and login/SignUp';
import Buy from './buy file/Buy';


// Create a client
const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    children: [
      {
        path: "/",
        element:  <Home></Home> ,
      },
      {
        path: "/shop",
        element:  <Shop></Shop> ,
      },
      {
        path: "/about",
        element: <About></About> ,
      },
      {
        path: "/add",
        element:  <Add></Add> ,
      },
      {
        path: "/read",
        element:  <Read></Read> ,
      },
      {
        path: "/login",
        element:  <Login></Login> ,
      },
      {
        path: "/signUp",
        element:  <SignUp></SignUp> ,
      },
      {
        path: "/buy",
        element: <Buy></Buy> ,
      },
      {
        path: "/update/:id",
        element:  <Update></Update> ,
        loader: ({params}) => fetch(`http://localhost:5000/addData/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    
  </StrictMode>,
)
