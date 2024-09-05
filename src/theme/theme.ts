// src/theme/theme.ts

import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light', // Specify light mode
        primary: {
            main: '#0096E5',  // New primary color (Blue)
        },
        secondary: {
            main: '#FFFC00',  // Snapchat yellow (to be used in specific places)
        },
        background: {
            default: '#F4F4F4', // New background color (Light gray)
        },
        text: {
            primary: '#000000',  // Black for all text
        },
    },
    typography: {
        fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        fontWeightRegular: 400,
        fontWeightBold: 700,
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#000000',  // Ensure h1 uses black text
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#000000',  // Ensure h2 uses black text
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#000000',  // Ensure body text uses black
        },
        button: {
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'none', // No automatic capitalization
        },
    },
    shape: {
        borderRadius: 10, // Keep rounded corners
    },
    components: {
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             color:'#000000',
        //             boxShadow:"none",
        //             textTransform: 'none',
        //             borderRadius: '20px',
        //             padding: '10px 20px',
        //             backgroundColor: '#FFFC00',  // Keep Snapchat yellow for buttons
        //             '&:hover': {
        //                 backgroundColor: '#f1e600',  // Slightly darker yellow on hover
        //             },
        //         },
        //     },
        // },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Specify dark mode
        primary: {
            main: '#0096E5',  // New primary color (Blue)
        },
        secondary: {
            main: '#FFFC00',  // Snapchat yellow (to be used in specific places)
        },
        background: {
            default: '#000000', // Dark mode background (Black)
        },
        text: {
            primary: '#FFFFFF',  // White for text in dark mode
        },
    },
    typography: {
        fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    shape: {
        borderRadius: 10, // Keep rounded corners
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#FFFC00',  // Keep Snapchat yellow for buttons
                    '&:hover': {
                        backgroundColor: '#f1e600',  // Slightly darker yellow on hover
                    },
                },
            },
        },
    },
});

export { lightTheme, darkTheme };
