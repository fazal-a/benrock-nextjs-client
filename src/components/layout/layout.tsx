import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Grid2, Container } from '@mui/material';
import { IoChatbubbleSharp, IoCompassOutline, IoCameraOutline } from "react-icons/io5";

const Layout: React.FC = ({ children }) => {
    const [value, setValue] = React.useState(0);

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                backgroundColor: "white",
            }}
        >
            <Grid2
                container
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    padding: '1rem',
                    backgroundColor: '#f7f7f7',
                }}
            >
                {children}
            </Grid2>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                showLabels
                sx={{
                    backgroundColor: '#FFFC00',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: '80px',
                    color: '#000',
                }}
            >
                <BottomNavigationAction label="Chat" icon={<IoChatbubbleSharp />} />
                <BottomNavigationAction label="Discover" icon={<IoCompassOutline />} />
                <BottomNavigationAction label="Camera" icon={<IoCameraOutline />} />
            </BottomNavigation>
        </Container>
    );
};

export default Layout;
