import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { IoSearch, IoAddCircle } from "react-icons/io5";

const Header: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <IoAddCircle />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ ml: 1, flex: 1 }}
                        startAdornment={<IoSearch />}
                    />
                </Box>
                <IconButton edge="end" color="inherit">
                    <IoAddCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
