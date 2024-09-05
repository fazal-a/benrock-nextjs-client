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

const Signup: React.FC = () => {
    const router = useRouter();
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
        await router.push('/login');
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
                        variant="standard"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid2>
                <Grid2 item xs={6}>
                    <TextField
                        label="Last Name"
                        type="text"
                        variant="standard"
                        fullWidth
                        value={lastName}
                        padding={0}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid2>
            </Grid2>

            <TextField
                label="Username"
                type="text"
                variant="standard"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{marginBottom: '1rem'}}
            />

            <FormControl component="fieldset" sx={{width: '100%', marginBottom: '1rem'}}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                </RadioGroup>
            </FormControl>

            <TextField
                label="Email"
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

            <Button
                variant="contained"
                fullWidth
                onClick={handleSignup}
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
                Sign Up
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
    );
};

export default Signup;
