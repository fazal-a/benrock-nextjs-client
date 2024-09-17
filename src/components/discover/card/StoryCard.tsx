import React from 'react';
import {Avatar, Box, Typography} from '@mui/material';

type StoryCardProps = {
    image: string;
    title: string;
};

const StoryCard: React.FC<StoryCardProps> = ({image, title}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box
                sx={{
                    border: '2px solid #c13584', // Purple border around the story
                    borderRadius: '50%',
                    padding: '3px',
                    display: 'inline-block',
                }}
            >
                <Avatar
                    src={image}
                    alt={title}
                    sx={{
                        width: 60, // Set the size of the story circle
                        height: 60,
                        borderRadius: '50%',
                    }}
                />
            </Box>
            <Typography
                variant="caption"
                sx={{
                    marginTop: '6px',
                    textAlign: 'center',
                    maxWidth: '60px', // Ensure the text doesn't extend beyond the avatar width
                    wordWrap: 'break-word', // Break long words to fit in the available space
                }}
            >
                username
            </Typography>
        </Box>
    );
};

export default StoryCard;
