
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 import React, { useState } from 'react';
import './SignIn.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth';

const SignIn = () => {
  const defaultTheme = createTheme();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {
    handlePassword,
    handleEmail,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setError,
    setUser,
    error,
    user,
    name,
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
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);  
          setEmail(data.get('email'))
          setPass(data.get('password'))
          signInWithEmailAndPassword(auth, email, pass)
          .then((result) => {
            setError("");
            navigate(from,{replace:true})
            history.push(destination);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {
              <ul>
                <li>{error}</li>
              </ul>
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
            {isLogin && (
              <Grid item xs>
              
                <Link as={NavLink} to='/resetPass' onClick={handleResetPassword} variant="body2" className='text-blue-500'>
                  Forgot password?
                </Link>
                
              </Grid>
              )}
              <Grid item>
             
                <Link as={NavLink} to='/signUp' variant="body2"className='text-blue-500'>
                  {"Don't have an account? Sign Up"}
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

export default SignIn;
