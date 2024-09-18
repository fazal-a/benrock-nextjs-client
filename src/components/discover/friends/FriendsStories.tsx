import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography, Button} from '@mui/material';
import {privateAxios} from '@/guards/axios-interceptor';
import StoryCard from "@/components/discover/card/StoryCard"; // Assuming you have this component

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
        <Box sx={{padding: '20px', flexGrow: 1}}>
            {/* Friends Stories Section */}
            <Box mb={3}>
                <Typography variant="h6">Friends' Stories</Typography>
            </Box>

            {/* Stories Scrollable Horizontally */}
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    '&::-webkit-scrollbar': {
                        display: 'none', // Hide the scrollbar
                    },
                    msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
                    scrollbarWidth: 'none', // Hide scrollbar in Firefox
                }}
            >
                {stories.length === 0 && loading ? (
                    // Show static story cards while loading initially
                    <>
                        <Box sx={{display: 'inline-block', mr: 2}}>
                            <StoryCard title="John's Story" image="path-to-image-1.jpg"/>
                        </Box>
                        <Box sx={{display: 'inline-block', mr: 2}}>
                            <StoryCard title="Sarah's Story" image="path-to-image-2.jpg"/>
                        </Box>
                    </>
                ) : (
                    stories.map((story, index) => (
                        <Box key={index} sx={{display: 'inline-block', mr: 2}}>
                            <StoryCard title={story.title} image={story.image}/>
                        </Box>
                    ))
                )}
            </Box>

            {loading && stories.length > 0 && (
                <Typography sx={{mt: 2}} align="center">
                    Loading more stories...
                </Typography>
            )}

            {/* Center Aligned Button */}
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                <Button variant="contained" color="secondary">
                    Add Friends
                </Button>
            </Box>

            {/* Load More Div */}
            <div ref={loadMoreRef} style={{height: '20px'}}/>
        </Box>
    );
};

export default FriendsStories;
