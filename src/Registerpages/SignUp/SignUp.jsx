
import './SignUp.css'
import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { Google } from '@mui/icons-material';
import useAuth from '../../Hooks/useAuth';

const defaultTheme = createTheme();
const SignUp = () => {
  const {
    handlePassword,
    handleEmail,
    userName,
    setUserName,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setLoading,
    setError,
    setUser,
    setName,
    setPass,
    setEmail,
    email,
    pass,
    name,
    error,
    user,
    
  } = useAuth();
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // Handle Google Sign in or sign up
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        // history.push(redirect_url);
        navigate(from,{replace:true})
        saveUser(
          result.user.email,
          result.user.displayName,
          result.user.photoURL,
          "PUT"
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Sign Up with Email and Password
    const handleSubmit = (event,photoURL) => {
       
      event.preventDefault();
      
        const data = new FormData(event.currentTarget);
        
        
          setName(data.get('firstName') +' '+ data.get('lastName'))
          setEmail(data.get('email'))
          setPass(data.get('password'))
          console.log(name,email, pass)
          
            createUserWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                console.log(userCredential);
                setError("");
                // setUserName(userCredential);
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, photoURL, "POST");
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                  displayName: name,
                })
                navigate(from,{replace:true})
                  .then(() => {})
                  .catch((error) => {});
                // history.push(redirect_url);
              })
              .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
              });
              
      };
      const saveUser = (email, displayName, photoURL, method) => {
        const user = { email, displayName, photoURL };
        fetch("https://toy-cart-server-rakibul12212.vercel.app/users", {
          method: method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
      };
     
    return (
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {
                  <ul>
                    <li>{error}</li>
                  </ul>
                }
                
              </Grid>
              <Grid item xs={12}>
                
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={
                    <span>
                      I agree with all{' '}
                      <a className='text-blue-500 underline'
                        href="https://www.termsfeed.com/live/cf573e69-5d9c-4986-adf4-e27b5fac2fbd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms and Conditions
                      </a>{' '}
                      of ToyLand
                    </span>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link as={NavLink} to='/login' variant="body2" className='text-blue-500'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          <button onClick={handleGoogleSignUp} type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-large text-bold rounded-lg text-sm my-7 px-5 py-2.5 text-center mr-2 mb-2">
            <Google />
            </button>
        </Box>
        
      </Container>
    </ThemeProvider>
    );
};

export default SignUp;
//   return (
//     <div className='flex flex-col md:flex-row bg-orange-50'>
//       <div className='md:w-1/2'>
//         <img src="https://images.unsplash.com/photo-1603558431750-dfa36513aee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" className='h-full p-5 rounded' />
//       </div>
//       <div className='md:w-1/2'>
//         <h1 className='text-bold text-3xl text-slate-600 p-5'>Register</h1>
//         <h3 className='p-5 text-slate-400'>Manage all your toys efficiently.<br /><span>Let's get you all set up so you can verify your personal account and begin setting up your profile</span></h3>

//         <div className='flex flex-col md:flex-row'>
//           <input type="text" name='firstname' placeholder="first name" className="input input-bordered w-full max-w-xs md:m-2" />
//           <input type="text" name='lastname' placeholder="last name" className="input input-bordered w-full max-w-xs md:m-2" />
//         </div>
//         <div className='flex flex-col md:flex-row'>
//           <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs md:m-2" />
//           <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs md:m-2" />
//         </div>
//         <div className='flex flex-col md:flex-row'>
//           <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs md:m-2" />
//           <input type="password" name='confirmpassword' placeholder="confirm password" className="input input-bordered w-full max-w-xs md:m-2" />
//         </div>
//         <div className='flex flex-col md:flex-row w-full'>
//         <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered w-full max-w-xs md:m-2" />
//         </div>
//         <div className='flex items-center'>
//           <input type="checkbox" name="remember me" id="" className='w-5 h-5 mr-2' />
//           <p>I agree to all the <span className='text-green-400'>Terms, Privacy Policy</span> and <span className='text-green-400'>Fees</span></p>
//         </div>
//         <div className='m-5'>
//           <button className="btn btn-success text-white">Create Account</button>
//         </div>

//         <p className='p-5'>Already have an account?<a href='/signin' className='text-green-400'>Sign in</a></p>

//       </div>
//     </div>
//   );
// };

// export default SignUP;
