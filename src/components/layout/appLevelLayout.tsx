import React from 'react';
import { Container } from '@mui/material';

const AppLevelLayout =  ({ children }: { children: React.ReactNode }) => {
    return (
        <Container
            maxWidth="sm" // Keep the width small (like mobile devices)
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                backgroundColor: "#fff", // Default background
                // padding: "1rem",
            }}
        >
            {children}
        </Container>
    );
};

export default AppLevelLayout;
