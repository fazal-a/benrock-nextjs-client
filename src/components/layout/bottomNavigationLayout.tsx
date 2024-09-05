import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { IoChatbubbleSharp, IoCompassOutline, IoCameraOutline } from "react-icons/io5";

const BottomNavigationLayout: React.FC = ({ children }) => {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",  // Full viewport height
                justifyContent: "space-between",
                backgroundColor: "#fff",
            }}
        >
            <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                {children}
            </Box>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                showLabels
                sx={{
                    backgroundColor: '#FFFC00',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    color: '#000',
                }}
            >
                <BottomNavigationAction label="Chat" icon={<IoChatbubbleSharp />} />
                <BottomNavigationAction label="Discover" icon={<IoCompassOutline />} />
                <BottomNavigationAction label="Camera" icon={<IoCameraOutline />} />
            </BottomNavigation>
        </Box>
    );
};

export default BottomNavigationLayout;
