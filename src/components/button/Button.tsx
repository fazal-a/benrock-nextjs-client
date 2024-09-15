import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button: React.FC<{ label?: string }> = ({ label }) => {
    return (
        <MuiButton variant="contained" color="primary">
            {label}
        </MuiButton>
    );
};

export default Button;
