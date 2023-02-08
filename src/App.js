import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/**import all components **/
import Username from "./components/Username";
import Password from "./components/Password";
import Register from "./components/Register";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Sidebar from"./components/layout/Sidebar";
import Offre from "./components/Offre";
import Dashbord from "./components/Dashbord";
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