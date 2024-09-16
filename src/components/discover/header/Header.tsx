import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Avatar, Box } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdMoreHoriz } from "react-icons/md";



const Header: React.FC = () => {
    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
                <Avatar alt="User Avatar" src="/path-to-your-avatar.png" />

                <Box sx={{ flexGrow: 1, mx: 2, position: 'relative' }}>
                    <InputBase
                        placeholder="Search"
                        sx={{
                            padding: '5px 10px',
                            borderRadius: '20px',
                            backgroundColor: '#f0f0f0',
                            width: '100%',
                            paddingLeft: '40px',
                            fontSize: '14px',
                        }}
                        startAdornment={
                            <Box sx={{display:'flex', position: 'absolute', left: 10 }}>
                        <IoSearch color='#757575'  />
                            </Box>
                    }
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton>
                        <HiOutlineUserAdd />
                    </IconButton>
                    <IconButton>
                        <MdMoreHoriz />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
