// components/account/index.tsx
import React from 'react';
import {Box, Typography, Button, Avatar} from '@mui/material';
import {FaCamera, FaEllipsisV, FaGrinBeam, FaListAlt, FaUserPlus} from 'react-icons/fa'; // Import react-icons properly
import Section from '@/components/account/Section';
import MenuItem from '@/components/account/MenuItem';

const Page: React.FC = () => {
    const username = "Julia";

    return (
        <Box sx={{padding: '20px', flexGrow: 1}}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Button onClick={() => console.log('Close button clicked')} sx={{color: '#FF5F5F'}}>
                    <span className="material-icons">expand_more</span> {/* Use MUI icons correctly */}
                </Button>
                <Avatar
                    src="/path-to-avatar.png"
                    alt="Snapchat Profile"
                    sx={{width: 80, height: 80, backgroundColor: '#FFFC00'}}
                />
                <span className="material-icons" style={{color: '#7C7C7C'}}>settings</span>
            </Box>

            <Typography variant="h6" align="center" sx={{marginY: '15px'}}>
                {username}
            </Typography>

            <div>
                <Section header="Stories">
                    <MenuItem leftIcon={FaCamera} rightIcon={FaEllipsisV} label="Add to My Story"/>
                    <MenuItem leftIcon={FaCamera} rightIcon={FaEllipsisV} label="Add to Our Story"/>
                </Section>

                <Section header="Friends">
                    <MenuItem leftIcon={FaUserPlus} rightIcon={FaEllipsisV} label="Add Friends"/>
                    <MenuItem leftIcon={FaListAlt} rightIcon={FaEllipsisV} label="My Friends"/>
                </Section>

                <Section header="Bitmoji">
                    <MenuItem leftIcon={FaGrinBeam} rightIcon={FaEllipsisV} label="Create Bitmoji"/>
                </Section>
            </div>

            <Box sx={{paddingY: '20px', textAlign: 'center'}}>
                <Typography variant="caption">
                    Joined Snapchat on September 12, 2023 {/* Replace with dynamic data */}
                </Typography>
            </Box>
        </Box>
    );
};

// Export default correctly
export default Page;
