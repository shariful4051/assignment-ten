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
import Error from '../component/Error';
import PrivateRouter from '../PrivateRouter/PrivateRouter';

const Router = createBrowserRouter([{
    path:'/',
    errorElement:<Error></Error>,
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/profile',
            element:<PrivateRouter>
                <Profile></Profile>
            </PrivateRouter>
        },
        {
            path:'/findPartners',
            Component:FindPartners,
            
        },
        {
            path:'/partnerDetails/:id',
            element:<PrivateRouter>
                <PartnerDetails></PartnerDetails>
            </PrivateRouter>
          
        },
        {
            path:'/createProfile',
            element:<PrivateRouter>
                <CreatProfile></CreatProfile>
            </PrivateRouter>
        },
        {
            path:'/myconnection',
            element:<PrivateRouter>
                <MyConnection></MyConnection>
            </PrivateRouter>
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