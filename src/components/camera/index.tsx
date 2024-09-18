import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Box, IconButton, Typography } from '@mui/material';
import { FaCircle, FaRedo, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",  // You can switch to 'environment' for the back camera
};

const Page: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [showFilters, setShowFilters] = useState(false);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImageSrc(imageSrc);
        }
    }, [webcamRef]);

    const resetCapture = () => {
        setImageSrc(null);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Display Webcam */}
            {!imageSrc && (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        objectFit: 'cover',
                    }}
                />
            )}

            {/* Display Captured Image */}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt="Captured"
                    style={{
                        width: '100vw',
                        height: '100vh',
                        objectFit: 'cover',
                    }}
                />
            )}

            {/* Bottom Capture Button */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {!imageSrc ? (
                    <IconButton onClick={capture}>
                        <FaCircle color="#FFFC00" size={80} />
                    </IconButton>
                ) : (
                    <IconButton onClick={resetCapture}>
                        <FaRedo color="#FFFC00" size={50} />
                    </IconButton>
                )}
            </Box>

            {/* Show Filters Button */}
            {!imageSrc && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <IconButton onClick={() => setShowFilters(!showFilters)}>
                        <FaSmile color="#FFFC00" size={50} />
                    </IconButton>
                </Box>
            )}

            {/* Filters */}
            {showFilters && !imageSrc && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#333',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    <Typography color="#FFF">Filters Coming Soon!</Typography>
                </motion.div>
            )}
        </Box>
    );
};

export default Page;
