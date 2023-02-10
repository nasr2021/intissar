import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/**import all components **/
import Username from "./components/auth/Username";
import Password from "./components/auth/Password";
import Register from "./components/auth/Register";
import Recovery from "./components/auth/Recovery";
import Reset from "./components/auth/Reset";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/auth/Profile";
import Sidebar from"./components/layout/Sidebar";
import Offre from "./components/Offre";
import Dashbord from "./components/Dashbord";
import Details from "./components/details";
import Quize from "./components/quize";
/***root routes ***/
const router = createBrowserRouter([
    {
        path:'/',
        element: <Username></Username>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/password',
        element: <Password></Password>
    },
    {
        path:'/recovery',
        element: <Recovery></Recovery>
    },
    {
        path:'/reset',
        element: <Reset></Reset>
    },
    {
        path:'/profile',
        element: <Profile></Profile>
     },
     {
        path:'/sidebar',
        element: <Sidebar></Sidebar>
     },
     {
        path:'/offre',
        element: <Offre></Offre>
     },
     {
        path:'/dashbord',
        element: <Dashbord></Dashbord>
     },
     {
        path:'/details',
        element: <Details></Details>
     },
     {
        path:'/quize',
        element: <Quize></Quize>
     },
    {
        path:'*',
        element: <PageNotFound></PageNotFound>
    },
]);


export default function App(){
    return (
        <main>

      <RouterProvider router={router}></RouterProvider>
    
      </main>
 
    )
}