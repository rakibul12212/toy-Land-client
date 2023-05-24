import React from 'react';
import './SignUp.css'

const SignUP = () => {
  return (
    <div className='flex flex-col md:flex-row bg-orange-50'>
      <div className='md:w-1/2'>
        <img src="https://images.unsplash.com/photo-1603558431750-dfa36513aee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" className='h-full p-5 rounded' />
      </div>
      <div className='md:w-1/2'>
        <h1 className='text-bold text-3xl text-slate-600 p-5'>Register</h1>
        <h3 className='p-5 text-slate-400'>Manage all your toys efficiently.<br /><span>Let's get you all set up so you can verify your personal account and begin setting up your profile</span></h3>

        <div className='flex flex-col md:flex-row'>
          <input type="text" name='firstname' placeholder="first name" className="input input-bordered w-full max-w-xs md:m-2" />
          <input type="text" name='lastname' placeholder="last name" className="input input-bordered w-full max-w-xs md:m-2" />
        </div>
        <div className='flex flex-col md:flex-row'>
          <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs md:m-2" />
          <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs md:m-2" />
        </div>
        <div className='flex flex-col md:flex-row'>
          <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs md:m-2" />
          <input type="password" name='confirmpassword' placeholder="confirm password" className="input input-bordered w-full max-w-xs md:m-2" />
        </div>
        <div className='flex flex-col md:flex-row w-full'>
        <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered w-full max-w-xs md:m-2" />
        </div>
        <div className='flex items-center'>
          <input type="checkbox" name="remember me" id="" className='w-5 h-5 mr-2' />
          <p>I agree to all the <span className='text-green-400'>Terms, Privacy Policy</span> and <span className='text-green-400'>Fees</span></p>
        </div>
        <div className='m-5'>
          <button className="btn btn-success text-white">Create Account</button>
        </div>

        <p className='p-5'>Already have an account?<a href='/signin' className='text-green-400'>Sign in</a></p>

      </div>
    </div>
  );
};

export default SignUP;
