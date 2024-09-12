import React from 'react';
import {Button, TextField, Box, Typography, Avatar, Grid2} from '@mui/material';
import {FaSnapchatSquare} from "react-icons/fa";
import {useRouter} from "next/router";
import {Formik} from "formik";
import * as Yup from 'yup';
import axiosInterceptor, {privateAxios} from "@/guards/axios-interceptor";

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password should be at least 8 characters')
        .required('Password is required'),
});


const Login: React.FC = () => {
    const router = useRouter();



    const handleLogin = async (email:string, password:string, setSubmitting: (isSubmitting: boolean) => void, setErrors: any) => {
        console.log("inside handleLogin email::",email, "password::",password, "setSubmitting:::",setSubmitting, "setErrors::",setErrors);
        const data = {
            email, password
        }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const response = await privateAxios.post('/auth/login',
            data
                );
            const data2 = await response.json();
            console.log(data2);
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
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                handleLogin(values.email, values.password);
                setSubmitting(false);
    }}>
            {({errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting})=>(
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
                        name="email"
                        variant="standard"
                        fullWidth
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched.email && errors.email}
                        error={!!touched.email && !!errors.email}
                        sx={{marginBottom: '1rem'}}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        variant="standard"
                        fullWidth
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched.password && errors.password}
                        error={!!touched.password && !!errors.password}
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

                    <Button variant="contained"
                            fullWidth
                            type="button"
                            onClick={handleSubmit}  // Call handleSubmit directly
                            disabled={isSubmitting}
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
                        {isSubmitting ? 'Logging in...' : 'Login'}
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
            )}

        </Formik>
    );
};

export default Login;
