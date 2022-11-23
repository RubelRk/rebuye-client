import React,  { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    const [error, setError] = useState('');
    useTitle('Login');
    const {loading, logInUser, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(loading){
      return <div className='text-center'>
          <div className="spinner-border m-5" role="status">
         <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        logInUser(email, password)
        .then(result =>{
            const user = result.user;
            setError('');
              const currentUser = {
                email:user.email
              }
              console.log(currentUser);
              fetch('http://localhost:3000/jwt',{
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(currentUser)
            })
            .then(res =>res.json())
            .then(data =>{
              console.log(data);
              localStorage.setItem('token', data.token);
              navigate(from, {replace: true});
              form.reset();
            })
        })
        .catch(err=>{
            console.error(err.message)
            setError(`${err.message} Email Address or Password don't Match.`);
        })
    };

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            const user = res.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err));
    };





    return (
        <div className='my-5'>
        <div className="d-lg-flex justify-content-around ">
          <div className="text-center my-2">
            <h1 className="">Login now!</h1>
            <p className="">Login Your valid Account with Your <br /> Email address and Password</p>
            <button className='btn btn-primary' onClick={handleGoogleSignIn}>Google Sign In</button>
          </div>

          <div className='border border-3 p-4'>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">

              <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input  type="email" name='email' placeholder="Your Email"  className="form-control" required/>
                </div>

              </div>


              <div className="form-control">

              <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' placeholder="Your Password" className="form-control"  required/>
                </div>
                            
              </div>
              <div className="form-control">
               <div className='text-danger'> 
               {error}
               </div>
                <button className="btn btn-primary">Login</button>
              </div>
              <Link to='/register'  className="text-danger">Create a new account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;