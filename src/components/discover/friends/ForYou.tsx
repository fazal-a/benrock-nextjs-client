import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

import ForYouCard from "@/components/discover/card/ForYouCard";
import {privateAxios} from "@/guards/axios-interceptor";

type Post = {
    image: string;
    title: string;
};

const ForYou: React.FC = () => {
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const isFetching = useRef(false);

    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<Post[]>([]);
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
            const response = await privateAxios.get(`/post/recent?page=${page}`);
            setPosts((prevPosts) => [...prevPosts, ...response.data.data.posts]);
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
        <Box sx={{padding: '20px', flexGrow: 1}}>

            {/* For You Section */}
            <Box mb={3}>
                <Typography variant="h6">For You</Typography>
                <Grid container spacing={2}>
                    {posts.length === 0 && loading ? (
                        // Show static cards while loading initially
                        <>
                            <Grid component="div" size={6}>
                                <ForYouCard title="I Love Ice Cream Sooo Much" image="path-to-image-1.jpg"/>
                            </Grid>
                            <Grid component="div" size={6}>
                                <ForYouCard title="Girls love taking selfies!" image="path-to-image-2.jpg"/>
                            </Grid>
                            <Grid component="div" size={6}>
                                <ForYouCard title="Flamingo raft floating on the beach" image="path-to-image-3.jpg"/>
                            </Grid>
                            <Grid component="div" size={6}>
                                <ForYouCard title="Fireworks on the 4th of July" image="path-to-image-4.jpg"/>
                            </Grid>
                        </>
                    ) : (
                        posts.map((post, index) => (
                            <Grid component="div" size={6} key={index}>
                                <ForYouCard title={post.title} image={post.image}/>
                            </Grid>
                        ))
                    )}
                </Grid>
                {loading && posts.length > 0 && (
                    <Typography sx={{mt: 2}} align="center">
                        Loading more posts...
                    </Typography>
                )}
            </Box>

            {/* Load More Div */}
            <div ref={loadMoreRef} style={{height: '20px'}}/>
        </Box>
    );
};

export default ForYou;
