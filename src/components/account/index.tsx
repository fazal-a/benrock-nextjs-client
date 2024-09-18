// components/account/index.tsx
import React from 'react';
import {Box, Typography, Button, Avatar, IconButton} from '@mui/material';
import {FaCamera, FaEllipsisV, FaGrinBeam, FaListAlt, FaUserPlus} from 'react-icons/fa';
import {MdExpandCircleDown} from "react-icons/md";
import {IoMdSettings} from "react-icons/io";

import Section from "@/components/account/Section";
import MenuItem from "@/components/account/MenuItem"; // Import react-icons properly

const Page: React.FC = () => {
    const profileName = "Julia";
    const username = "@julia_sc";

    return (
        <Box sx={{padding: '20px', flexGrow: 1}}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <IconButton onClick={() => console.log('Close button clicked')} sx={{color: '#FF5F5F'}} size="large">
                    <MdExpandCircleDown/>
                </IconButton>
                <IconButton  size="large">
                    <IoMdSettings/>
                </IconButton>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar
                    src="/path-to-avatar.png"
                    alt="Snapchat Profile"
                    sx={{width: 100, height: 100, borderRadius: '50%',}}
                />
            </Box>

            <Typography variant="h6" align="center" sx={{marginTop: '15px'}}>
                {profileName}
            </Typography>

            <Typography align="center">
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
