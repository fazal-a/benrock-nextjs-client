import React from 'react';
import {Box, Typography} from '@mui/material';

type SectionProps = {
    header: string;
    children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({header, children}) => {
    return (
        <Box sx={{marginBottom: '20px'}}>
            <Typography variant="subtitle1" sx={{fontWeight: 'bold', marginBottom: '8px'}}>
                {header}
            </Typography>
            <Box>{children}</Box>
        </Box>
    );
};

// Ensure it is exported correctly
export default Section;
