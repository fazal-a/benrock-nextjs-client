import React, {useState, useEffect, useRef} from 'react';
import {Box, Typography, CircularProgress, Grid2} from '@mui/material';
import axios from 'axios';
import Header from "@/components/header/Header";
import Button from "@/components/header/Header";

type Profile = {
    image: string;
    title: string;
};

const Discover: React.FC = () => {
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const isFetching = useRef(false);

    const [page, setPage] = useState(1);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadPage();
    }, [page]);

    const onScroll = () => {
        if (!isFetching.current && loadMoreRef.current?.getBoundingClientRect().bottom! <= window.innerHeight) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const loadPage = async () => {
        isFetching.current = true;
        setLoading(true);
        try {
            const response = await axios.get(`/posts/discover?page=${page}`);
            setProfiles((prevProfiles) => [...prevProfiles, ...response.data.discover]);
            isFetching.current = false;
        } catch (error) {
            console.error('Error fetching data', error);
            isFetching.current = false;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Box sx={{padding: '20px'}}>
            <Header/>
            <Box mb={4}>
                <Typography variant="h5">Friends</Typography>
                <Typography variant="body2">Stories from your friends will appear here.</Typography>
                <Button variant="contained" color="primary" sx={{mt: 2}}>
                    Add Friends
                </Button>
            </Box>

            <Box mb={4}>
                <Typography variant="h5">For You</Typography>
                <Grid2 container spacing={2}>
                    {profiles.length ? (
                        profiles.map(({image, title}) => (
                            <Grid2 item xs={12} sm={6} md={4} key={image}>
                                <Card image={image} title={title}/>
                            </Grid2>
                        ))
                    ) : (
                        <CircularProgress/>
                    )}
                </Grid2>
                <div ref={loadMoreRef}/>
                {loading && <CircularProgress/>}
            </Box>
        </Box>
    );
};

export default Discover;
