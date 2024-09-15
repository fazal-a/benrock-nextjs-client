import React from 'react';
import { Box, Card as MuiCard, CardMedia, Typography } from '@mui/material';

type CardProps = {
    image: string;
    title: string;
};

const Card: React.FC<CardProps> = ({ image, title }) => {
    return (
        <MuiCard sx={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
            <CardMedia component="img" height="275" image={image} alt={title} />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                }}
            >
                <Typography variant="h6">{title}</Typography>
            </Box>
        </MuiCard>
    );
};

export default Card;
