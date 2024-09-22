import React from 'react';
import {Button, TextField, Box, Typography, Avatar, Grid2} from '@mui/material';
import {FaSnapchatSquare} from "react-icons/fa";
import {useRouter} from "next/router";
import {ErrorMessage, Formik} from "formik";
import {privateAxios} from "@/guards/axios-interceptor";
import {useAuthContext} from "@/context/auth-context";
import {validationSchema} from "@/utils/validation-schema";
import {loginInitialValues} from "@/utils/initial-values";
import {loginHandler} from "@/helpers/auth-helpers";

const Login: React.FC = () => {
    const router = useRouter();
    const { signIn } = useAuthContext();

    const handleLogin = async (email:string, password:string, setSubmitting: (isSubmitting: boolean) => void, setErrors: any) => {
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
            // Make a POST request using the privateAxios instance
            const response = await privateAxios.post('/auth/login', data, config
            );
            // Call signIn from AuthContext to store the token and redirect to chat
            await signIn({
                token: response.data.data.token,
                user: response.data.data.user
            });

            console.log("Login successful", response.data);
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
            initialValues={loginInitialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setErrors, setStatus }) => {
                await loginHandler(values, setSubmitting, setErrors, setStatus, signIn);
    }}>
            {({errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting, status})=>(
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

                    {/* Display form-wide error message below input fields */}
                    {status && <Typography style={{ color: 'red' }}>{status}</Typography>}

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
