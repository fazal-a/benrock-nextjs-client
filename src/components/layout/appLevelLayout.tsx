import React from 'react';
import { Grid2, Container } from '@mui/material';

const AppLevelLayout: React.FC = ({ children }) => {

    return (
        <Container
            maxWidth="sm"
            sx={{
                // display: "flex",
                // flexDirection: "column",
                height: "100vh",
                backgroundColor: "red",
            }}
        >
            {children}
        </Container>
    );
};

export default AppLevelLayout;
