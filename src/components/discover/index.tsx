import React from 'react';
import Header from "@/components/discover/header/Header";
import FriendsStories from "@/components/discover/friends/FriendsStories";
import ForYou from "@/components/discover/friends/ForYou";

const Page: React.FC = () => {
    return (
        <>
            <Header/>
            <FriendsStories/>
            <ForYou/>
        </>
    );
};

export default Page;
