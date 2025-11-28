import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import Profile from '../component/Profile';

const Router = createBrowserRouter([{
    path:'/',
    errorElement:<p>page not found</p>,
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        }
    ]
}
    
])


export default Router;