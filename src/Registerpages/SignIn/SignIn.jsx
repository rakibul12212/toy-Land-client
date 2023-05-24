import React from 'react';
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='flex flex-col md:flex-row bg-orange-50'>
      <div className='md:w-1/2'>
        <img src="https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=510&q=80" alt="" className='h-full p-5' />
      </div>
      <div className='md:w-1/2'>
        <div className='p-5'>
          <img src="logo.jpg" alt="logo" className='w-6' />
          <h1 className='text-bold text-3xl text-slate-600'>Hello Again!</h1>
          <p className='text-slate-400'>Welcome back, you've been missed!</p>
        </div>
        <div className="form-control w-full max-w-xs p-5">
          <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs m-1" />
          <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs m-1" />
        </div>
        <div className='p-2'>
          <div className='flex items-center'>
            <input type="checkbox" name="remember me" id="" className='w-5 h-5 mr-2' />
            <p>Remember me</p>
          </div>
          <p className='text-green-400 p-5'>Forgot password?</p>
        </div>
        <div className='p-6'>
          <button className="btn btn-success text-white">Sign In</button>
        </div>
        <div className='p-5'>
          <p>Don't have an account? <span className='text-green-400'>Sign up for free</span></p>
          <p>Or connect with:</p>
          <div className='flex gap-4 w-6'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="Google logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
