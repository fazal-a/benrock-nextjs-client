import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Box, IconButton, Button } from '@mui/material';
import { FaUpload } from 'react-icons/fa';

const videoConstraints = {
    facingMode: "user", // Use 'environment' for back camera on mobile
};

const CameraPage: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [capturedVideo, setCapturedVideo] = useState<string | null>(null);
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [isLongPress, setIsLongPress] = useState<boolean>(false); // For long press tracking

    // Capture an image
    const captureImage = useCallback(() => {
        const image = webcamRef.current?.getScreenshot();
        setImageSrc(image || null);
    }, [webcamRef]);

    // Start recording video
    const startRecording = () => {
        setIsRecording(true);
        const stream = webcamRef.current?.stream;
        if (stream) {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            const videoChunks: Blob[] = [];
            mediaRecorder.ondataavailable = (event) => {
                videoChunks.push(event.data);
            };
            mediaRecorder.onstop = () => {
                const blob = new Blob(videoChunks, { type: 'video/mp4' });
                const videoUrl = URL.createObjectURL(blob);
                setCapturedVideo(videoUrl);
            };
            mediaRecorder.start();
        }
    };

    // Stop recording video
    const stopRecording = () => {
        setIsRecording(false);
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
    };

    // Handle single press (for capturing image)
    const handleSinglePress = () => {
        if (!isLongPress) {
            captureImage(); // Capture image on tap
        }
        setIsLongPress(false);
    };

    // Handle long press (for video recording)
    const handleLongPressStart = () => {
        setIsLongPress(true);
        startRecording(); // Start recording on long press
    };

    const handleLongPressEnd = () => {
        if (isRecording) {
            stopRecording(); // Stop recording when long press ends
        }
    };

    // Handle file upload (image or video)
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            if (file.type.startsWith('image/')) {
                setImageSrc(fileUrl);
            } else if (file.type.startsWith('video/')) {
                setCapturedVideo(fileUrl);
            }
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
                maxWidth: '-webkit-fill-available'
            }}
        >
            {/* Display Webcam */}
            {!imageSrc && !capturedVideo && (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    style={{
                        width: '100vw', // Full viewport width
                        height: '100vh', // Full viewport height
                        objectFit: 'cover', // Cover the entire area while maintaining aspect ratio
                    }}
                />
            )}

            {/* Display Captured Image */}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt="Captured"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            )}

            {/* Display Captured Video */}
            {capturedVideo && (
                <video
                    src={capturedVideo}
                    controls
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            )}

            {/* Capture Button (Acts like Snapchat button) */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 30, // Position the button at the bottom of the screen
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <IconButton
                    onMouseDown={handleLongPressStart} // Long press start
                    onMouseUp={handleLongPressEnd} // Long press end
                    onClick={handleSinglePress} // Single tap for capturing image
                    sx={{
                        backgroundColor: isRecording ? '#FF0000' : '#FFFC00', // Change color while recording
                        color: '#000',
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                    }}
                />
            </Box>

            {/* Upload Button */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 100, // Position the upload button above the capture button
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<FaUpload />}
                    sx={{ backgroundColor: '#FFFC00', color: '#000' }}
                >
                    Upload
                    <input
                        type="file"
                        accept="image/*,video/*"
                        hidden
                        onChange={handleFileUpload}
                    />
                </Button>
            </Box>
        </Box>
    );
};

export default CameraPage;