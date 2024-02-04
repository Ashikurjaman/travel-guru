import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContexProvider';

const Login = () => {
  const {login} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
    const handelLogin = e =>{
        e.preventDefault();
       const form =e.target;
       const formData = new FormData(form);
       const email = formData.get('email')
       const password = formData.get('password')
       console.log(email,password);
       login(email,password)
       .then((result) => {
        // Signed up 
        const user = result.user;
        form.reset()
        navigate(location.state? location.state : '/')
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    }

    return (
        <div className="hero max-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center p-2'><small>Do not have an account?please <Link className='text-blue-600' to={'/register'}>Register</Link></small></p>
    </div>
  </div>
</div>
    );
};

export default Login;