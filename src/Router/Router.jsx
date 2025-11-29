import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import Profile from '../component/Profile';
import FindPartners from '../component/FindPartners';
import PartnerDetails from '../component/PartnerDetails';
import CreatProfile from '../component/CreatProfile';
import MyConnection from '../component/MyConnection';

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
            path:'/findPartners',
            Component:FindPartners,
            
        },
        {
            path:'/partnerDetails/:id',
            element:<PartnerDetails></PartnerDetails>,
            loader:({params})=>fetch(`http://localhost:3000/allpartners/${params.id}`)
        },
        {
            path:'/createProfile',
            element:<CreatProfile></CreatProfile>
        },
        {
            path:'/myconnection',
            element:<MyConnection></MyConnection>
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