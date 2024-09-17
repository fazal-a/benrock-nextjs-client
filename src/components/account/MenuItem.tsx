import React from 'react';
import {Box, Typography, IconButton} from '@mui/material';

type MenuItemProps = {
    leftIcon: React.ElementType;
    rightIcon: React.ElementType;
    label: string;
    straightEdge?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({leftIcon: LeftIcon, rightIcon: RightIcon, label, straightEdge}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 15px',
                backgroundColor: '#fff',
                borderRadius: straightEdge ? 0 : '8px',
                boxShadow: straightEdge ? 'none' : '0px 1px 4px rgba(0,0,0,0.1)',
                marginBottom: '10px',
            }}
        >
            <LeftIcon style={{marginRight: '10px'}}/>
            <Typography sx={{flexGrow: 1}}>{label}</Typography>
            <IconButton>
                <RightIcon/>
            </IconButton>
        </Box>
    );
};

// Ensure it is exported correctly
export default MenuItem;
