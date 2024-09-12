import React from 'react';
import Chat from "@/components/chat/Chat";
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";

const ChatPage: React.FC = () => {
    return (
        <BottomNavigationLayout>
            <Chat />
        </BottomNavigationLayout>
    );
};

export default ChatPage;
