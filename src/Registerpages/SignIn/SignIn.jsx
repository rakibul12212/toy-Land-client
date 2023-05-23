import React from 'react';
import './SignIn.css'

const SignIn = () => {
    return (
        <div className='flex '>
            <div >
                <img src="https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=510&q=80" alt="" className='h-full p-5'/>
            </div>
            <div >
            <div className='p-5'>
                <img src="logo.jpg" alt="logo"  className='w-6 '/>
                <h1 className='text-bold text-3xl text-slate-600'>Hello Again!</h1>
                <p className='text-slate-400'>Wellcome back you've been missed!</p>
            </div>
            <div className="form-control w-full max-w-xs p-5">   
                <input type="text" placeholder="user name" className="input input-bordered w-full max-w-xs m-1" />
                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs m-1" />
            </div>
            <div className='p-2'>
                <div className='flex'>
                    <input type="checkbox" name="remember me" id="" className='w-16 h-5' />
                    <p>remember me</p>
                </div>
              <p className='text-green-400 p-5'>forget password?</p>
            </div>
            <div className='p-6'>
              <button className="btn btn-success text-white ">Sign In</button>
            </div>
           <div className='p-5'>
               <p>Don't have an account? <span className='text-green-400'>Sign up for free</span></p>
               <p>Or connect with:<span className='w-32 grid grid-cols-2 gap-4 place-content-center'>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="facebook icon" /></span></p>
           </div>
            
        </div>
        </div>
    );
};

export default SignIn;