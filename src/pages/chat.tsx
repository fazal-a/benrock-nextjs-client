import React from 'react';
import BottomNavigationLayout from '@/components/layout/BottomNavigationLayout';
import Chat from "@/components/chat/Chat";

const ChatPage: React.FC = () => {
    return (
        <BottomNavigationLayout>
            <Chat />
        </BottomNavigationLayout>
    );
};

export default ChatPage;
