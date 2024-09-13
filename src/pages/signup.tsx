import React, {useState} from 'react';
import {
    Button,
    TextField,
    Box,
    Grid2,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel, Avatar
} from '@mui/material';
import {FaSnapchatSquare} from "react-icons/fa";
import {useRouter} from "next/router";
import {loginInitialValues, signupInitialValues} from "@/utils/initial-values";
import {signupValidationSchema, validationSchema} from "@/utils/validation-schema";
import {loginHandler, signupHandler} from "@/helpers/auth-helpers";
import {Formik} from "formik";
import {useAuthContext} from "@/context/auth-context";

const Signup: React.FC = () => {
    const router = useRouter();
    const {signUp} = useAuthContext();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:4000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({firstName, lastName, username, gender, email, password}),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleLogin = async () => {
        await router.push('/l=Login');
        console.log("Sign up clicked");
    };

    return (
        <Formik
            initialValues={signupInitialValues}
            validationSchema={signupValidationSchema}
            onSubmit={async (values, { setSubmitting, setErrors, setStatus }) => {
                await signupHandler(values, setSubmitting, setErrors, setStatus, signUp);
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
            padding={10}>
            <Avatar variant='square' sx={{
                backgroundColor:'transparent',
                width:150,
                height:150
            }}>
                <FaSnapchatSquare size={70} color='black'/>
            </Avatar>

            <Typography variant="h2" gutterBottom>
                Create Your Account
            </Typography>

            <Grid2 container spacing={1} sx={{marginBottom: '1rem', padding: 0}}>
                <Grid2 item xs={6}>
                    <TextField
                        label="First Name"
                        type="text"
                        name="firstName"
                        variant="standard"
                        fullWidth
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched.firstName && errors.firstName}
                        error={!!touched.firstName && !!errors.firstName}
                    />
                </Grid2>
                <Grid2 item xs={6}>
                    <TextField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        variant="standard"
                        fullWidth
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        helperText={touched.lastName && errors.lastName}
                        error={!!touched.lastName && !!errors.lastName}
                    />
                </Grid2>
            </Grid2>

            <TextField
                label="Username"
                type="text"
                name="userName"
                variant="standard"
                fullWidth
                value={values.userName}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.userName && errors.userName}
                error={!!touched.userName && !!errors.userName}
                sx={{marginBottom: '1rem'}}
            />

            <FormControl component="fieldset" sx={{width: '100%', marginBottom: '1rem'}}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={values.gender}
                    onBlur={handleBlur}
                    onChange={handleChange}
                >
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                </RadioGroup>
            </FormControl>

            <TextField
                label="Email"
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
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </Button>

            <Grid2 container justifyContent="center" sx={{mt: 3}}>
                <Typography container sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    Already a User?{' '}
                    <Button
                        variant="text"
                        onClick={()=>handleLogin()}
                        sx={{
                            textTransform: 'none',
                            color: '#0096E5',
                        }}
                    >
                        Login
                    </Button>
                </Typography>
            </Grid2>
        </Box>
            )}

        </Formik>
    );
};

export default Signup;
