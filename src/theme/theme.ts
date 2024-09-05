import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFC00',  // Snapchat yellow
        },
        secondary: {
            main: '#000000',  // Black for icons and text
        },
        background: {
            default: '#FFFFFF', // White background for the app
        },
    },
    typography: {
        fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        fontWeightRegular: 400,
        fontWeightBold: 700,
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#000000',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#000000',
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#000000',
        },
        button: {
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'none', // No uppercase
        },
    },
    shape: {
        borderRadius: 10, // Rounded corners to match Snapchat's UI
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // No automatic capitalization
                    borderRadius: '20px',  // Rounded buttons
                    padding: '10px 20px',
                    backgroundColor: '#FFFC00', // Snapchat yellow
                    '&:hover': {
                        backgroundColor: '#f1e600',  // Slightly darker yellow on hover
                    },
                },
            },
        },
    },
});

export default theme;
