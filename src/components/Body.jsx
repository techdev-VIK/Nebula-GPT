import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

import { auth } from "../utils/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () => {

    const dispatch = useDispatch();


    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/browse",
          element: <Browse />
        }
      ])
    
      return (
    
          <div>
              <RouterProvider router={appRouter} />
          </div>
    
      )
}

export default Body;