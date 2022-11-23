import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className='text-center'>
            <div className="spinner-border m-5" role="status">
           <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;