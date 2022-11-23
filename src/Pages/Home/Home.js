import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const Home = () => {
    const{loading} = useContext(AuthContext);
    useTitle('Home');

    if(loading){
        return <div className='text-center'>
            <div className="spinner-border m-5" role="status">
           <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    }
    return (
        <div>
           <h3>this is home</h3>
        </div>
    );
};

export default Home;