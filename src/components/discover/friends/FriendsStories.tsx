import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid2, Button } from '@mui/material';
import { privateAxios } from '@/guards/axios-interceptor';
import StoryCard from "@/components/discover/card/StoryCard"; // Your custom axios instance

type Story = {
    image: string;
    title: string;
};

const FriendsStories: React.FC = () => {
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const isFetching = useRef(false);

    const [page, setPage] = useState(1);
    const [stories, setStories] = useState<Story[]>([]);
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
            const response = await privateAxios.get(`/post/recent`);
            setStories((prevStories) => [...prevStories, ...response.data.data.posts]);
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
        <Box sx={{ padding: '20px', flexGrow: 1 }}>
            {/* Friends Stories Section */}
            <Box mb={3}>
                <Typography variant="h6">Friends' Stories</Typography>
                <Typography variant="body2" color="textSecondary">
                    See what your friends are sharing.
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Add Friends
                </Button>
            </Box>

            {/* Stories Grid2 */}
            <Box mb={3}>
                <Grid2 container spacing={2}>
                    {stories.length === 0 && loading ? (
                        // Show static story cards while loading initially
                        <>
                            <Grid2 size={3}>
                                <StoryCard title="John's Story" image="path-to-image-1.jpg" />
                            </Grid2>
                            <Grid2 size={3}>
                                <StoryCard title="Sarah's Story" image="path-to-image-2.jpg" />
                            </Grid2>
                        </>
                    ) : (
                        stories.map((story, index) => (
                            <Grid2 size={3} key={index}>
                                <StoryCard title={story.title} image={story.image} />
                            </Grid2>
                        ))
                    )}
                </Grid2>

                {loading && stories.length > 0 && (
                    <Typography sx={{ mt: 2 }} align="center">
                        Loading more stories...
                    </Typography>
                )}
            </Box>

            {/* Load More Div */}
            <div ref={loadMoreRef} style={{ height: '20px' }} />
        </Box>
    );
};

export default FriendsStories;
