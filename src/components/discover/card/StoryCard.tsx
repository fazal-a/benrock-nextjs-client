import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

type StoryCardProps = {
    image: string;
    title: string;
};

const StoryCard: React.FC<StoryCardProps> = ({ image, title }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    border: '3px solid #FF0000', // The red circular border like seen in stories
                    borderRadius: '50%',
                    padding: '4px',
                    display: 'inline-block',
                }}
            >
                <Avatar
                    src={image}
                    alt={title}
                    sx={{
                        width: 80, // Size of the circle
                        height: 80,
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Typography variant="body2" sx={{ marginTop: '8px', textAlign: 'center' }}>
                {title}
            </Typography>
        </Box>
    );
};

export default StoryCard;
