import React from 'react';
import { Box, IconButton, Button } from '@mui/material';
import { FaTimes, FaUpload } from 'react-icons/fa';

interface PreviewProps {
    mediaSrc: string;
    mediaType: 'image' | 'video';
    onCancel: () => void;
    onUpload: () => void;
}

const Page: React.FC<PreviewProps> = ({ mediaSrc, mediaType, onCancel, onUpload }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000',
            }}
        >
            {/* Display Image or Video */}
            {mediaType === 'image' ? (
                <img
                    src={mediaSrc}
                    alt="Captured"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            ) : (
                <video
                    src={mediaSrc}
                    controls
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            )}

            {/* Cancel Button (Top Right) */}
            <IconButton
                onClick={onCancel}
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: '#FFFC00', // Yellow color
                }}
            >
                <FaTimes size={30} />
            </IconButton>

            {/* Upload/Share Button (Bottom Center) */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 30,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<FaUpload />}
                    onClick={onUpload}
                    sx={{ backgroundColor: '#FFFC00', color: '#000' }}
                >
                    Share / Post
                </Button>
            </Box>
        </Box>
    );
};

export default Page;
