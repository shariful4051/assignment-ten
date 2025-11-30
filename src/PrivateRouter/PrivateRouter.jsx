import React, { use } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loding from '../component/Loding';

const PrivateRouter = ({children}) => {
    const {user,loding} =use(AuthContext)
    const location = useLocation()
    if(loding){
        return <Loding></Loding>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;