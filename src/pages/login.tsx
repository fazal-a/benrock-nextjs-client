import React, {useState} from 'react';
import {Button, TextField, Box, Grid, Typography, Avatar, Grid2} from '@mui/material';
import {FaSnapchatSquare} from "react-icons/fa";
import {useRouter} from "next/router";

const Login: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleForgotPassword = () => {
        // Implement your forgot password logic here
        console.log("Forgot password clicked");
    };

    const handleSignUp = async () => {
        await router.push('/signup');
        console.log("Sign up clicked");
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
            padding={10}
        >
            <Avatar variant='square' sx={{
                backgroundColor:'transparent',
                width:150,
                height:150
            }}>
                <FaSnapchatSquare size={70} color='black'/>
            </Avatar>

            <Typography variant="h2" gutterBottom>
                Welcome Back!
            </Typography>

            <TextField
                label="Email or username"
                type="email"
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{marginBottom: '1rem'}}
            />

            <TextField
                label="Password"
                type="password"
                variant="standard"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{marginBottom: '1rem'}}
            />

            <Grid2 container justifyContent="flex-end" sx={{width: '100%', marginBottom: '1rem'}}>
                <Button
                    variant="text"
                    onClick={handleForgotPassword}
                    sx={{textTransform: 'none', color: '#0096E5'}} // Blue color for the button
                >
                    Forgot Password?
                </Button>
            </Grid2>

            <Button
                variant="contained"
                fullWidth
                onClick={handleLogin}
                sx={{
                    color: '#000000',
                    boxShadow: 'none',
                    textTransform: 'none',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#FFFC00', // Snapchat yellow for the button
                    '&:hover': {
                        backgroundColor: '#f1e600', // Slightly darker yellow on hover
                    },
                    marginBottom: '1rem',
                }}
            >
                Login
            </Button>

            <Grid2 container justifyContent="center" sx={{mt: 3}}>
                <Typography container sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    New here?{' '}
                    <Button
                        variant="text"
                        onClick={handleSignUp}
                        sx={{
                            textTransform: 'none',
                            color: '#0096E5',
                        }}
                    >
                        Sign Up
                    </Button>
                </Typography>
            </Grid2>
        </Box>
    );
};

export default Login;
