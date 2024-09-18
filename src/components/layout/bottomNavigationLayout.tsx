import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { SiPowerpages } from 'react-icons/si';
import { IoChatbox } from 'react-icons/io5';
import { FaCircleNotch } from 'react-icons/fa';

const BottomNavigationLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [value, setValue] = React.useState(1); // Default to the middle camera icon

    // Sync value with the current path
    useEffect(() => {
        if (router.pathname === '/chat') setValue(0);
        else if (router.pathname === '/camera') setValue(1);
        else if (router.pathname === '/discover') setValue(2);
    }, [router.pathname]);

    // Handle navigation change
    const handleNavigationChange = async (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue); // Set value first to update UI immediately
        if (newValue === 0) await router.push('/chat');        // Navigate to Chat
        else if (newValue === 1) await router.push('/camera'); // Navigate to Camera (center icon)
        else if (newValue === 2) await router.push('/discover'); // Navigate to Discover
    };

    return (
        <Box
            sx={{
                height: '100vh',  // Full viewport height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
            }}
        >
            {/* Main Content Area */}
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                {children}
            </Box>

            {/* Bottom Navigation */}
            <BottomNavigation
                value={value}
                onChange={handleNavigationChange}
                showLabels={false} // Hide labels, only icons
                sx={{
                    position: 'fixed',  // Ensure it's fixed at the bottom of the screen
                    bottom: 0,
                    width: '100%',
                    color: '#000',
                    backgroundColor: 'transparent',
                    left: 0,
                    right: 0
                }}
            >
                <BottomNavigationAction
                    icon={<IoChatbox fontSize="45" />}
                    sx={{
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            display: value === 0 ? 'block' : 'none',
                            width: '60px',
                            height: '5px',
                            backgroundColor: '#FFFC00', // Snapchat yellow
                            position: 'absolute',
                            bottom: -5,
                        },
                        bottom: 10,
                    }}
                />
                <BottomNavigationAction
                    icon={<FaCircleNotch fontSize="45" />}
                    sx={{
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            display: value === 1 ? 'block' : 'none',
                            width: '60px',
                            height: '5px',
                            backgroundColor: '#FFFC00', // Snapchat yellow
                            position: 'absolute',
                            bottom: -5,
                        },
                        bottom: 20,
                    }}
                />
                <BottomNavigationAction
                    icon={<SiPowerpages fontSize="45" />}
                    sx={{
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            display: value === 2 ? 'block' : 'none',
                            width: '60px',
                            height: '5px',
                            backgroundColor: '#FFFC00', // Snapchat yellow
                            position: 'absolute',
                            bottom: -5,
                        },
                        bottom: 15,
                    }}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomNavigationLayout;
