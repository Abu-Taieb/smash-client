import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructor/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },{
          path: 'instructor',
          element: <Instructors></Instructors>
        },{
          path: 'classes',
          element: <Classes></Classes>
        },{
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },{
          path: 'logIn',
          element: <LogIn></LogIn>
        },{
          path: 'registration',
          element: <Registration></Registration>
        }
    ]
  }
]);