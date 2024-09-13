import React from 'react';
import Chat from "@/components/chat/Chat";
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";
import {AuthGuard} from "@/guards/auth-guard";

const ChatPage: React.FC = () => {
    console.log("chatPage:::",ChatPage)

    return (
        <AuthGuard>
        <BottomNavigationLayout>
            <Chat />
        </BottomNavigationLayout>
        </AuthGuard>
    );
};

export default ChatPage;
