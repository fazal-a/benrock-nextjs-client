import React from 'react';
import {Box, Typography, Card as MuiCard, CardMedia} from '@mui/material';

type CardProps = {
    image: string;
    title: string;
};

const ForYouCard: React.FC<CardProps> = ({image, title}) => {
    return (
        <MuiCard sx={{
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '130%',
        }}>
            <CardMedia component="img"
                       image={'https://images.unsplash.com/photo-1726270021286-bef67a75ab73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                       alt={title}
                       sx={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           objectFit: 'cover' // Ensures the image covers the entire card area
                       }}/>
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
                <Typography variant="body2" sx={{fontWeight: 'bold'}}>
                    {title}
                </Typography>
            </Box>
        </MuiCard>
    );
};

export default ForYouCard;
