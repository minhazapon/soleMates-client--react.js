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
import AuthContext from './firebase and login/AuthContext';
import PrivateRoute from './firebase and login/PrivateRoute';


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
        element: <PrivateRoute><Shop></Shop></PrivateRoute>   ,
      },
      {
        path: "/about",
        element:  <PrivateRoute><About></About></PrivateRoute> ,
      },
      {
        path: "/add",
        element:   <PrivateRoute><Add></Add></PrivateRoute> ,
      },
      {
        path: "/read",
        element:   <PrivateRoute><Read></Read></PrivateRoute> ,
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
        element:  <PrivateRoute><Buy></Buy></PrivateRoute> ,
      },
      {
        path: "/update/:id",
        element:   <PrivateRoute><Update></Update></PrivateRoute> ,
        loader: ({params}) => fetch(`https://solemates-server-nodejs-1.onrender.com/addData/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <QueryClientProvider client={queryClient}>
        <AuthContext>
        <RouterProvider router={router} />
        </AuthContext>
      </QueryClientProvider>
    
  </StrictMode>,
)
