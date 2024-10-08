//pages/chat.tsx
import React from 'react';
import Chat from "@/components/chat/Chat";
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";
import {AuthGuard} from "@/guards/auth-guard";

const ChatPage: React.FC = () => {

    return (
        <div>
        <AuthGuard>
        <BottomNavigationLayout>
            <Chat />
        </BottomNavigationLayout>
        </AuthGuard>
        </div>
    );
};

export default ChatPage;
