import React from 'react';
import { Box } from '@mui/material';

const AppLevelLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            sx={{
                maxWidth: "sm", // Keep the width small (like mobile devices)
                margin: "0 auto", // Center horizontally
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                backgroundColor: "#FAFAFA",
                width: "100%"
            }}
        >
            {children}
        </Box>
    );
};

export default AppLevelLayout;
