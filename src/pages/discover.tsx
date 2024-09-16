import React from 'react';
import {Box} from '@mui/material';
import Header from "@/components/discover/header/Header";
import {AuthGuard} from "@/guards/auth-guard";
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";
import ForYou from "@/components/discover/friends/ForYou";
import FriendsStories from "@/components/discover/friends/FriendsStories";

const Discover: React.FC = () => {
    return (
        <AuthGuard>
            <BottomNavigationLayout>
                <Box>
                    <Header/>
                    <FriendsStories/>
                    <ForYou/>
                </Box>
            </BottomNavigationLayout>
        </AuthGuard>
    );
};

export default Discover;
