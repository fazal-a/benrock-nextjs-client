// src/pages/chat.tsx

import React from 'react';
import Link from 'next/link';
import Chat from "@/components/chat/Chat";
const ChatPage: React.FC = () => {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem' }}>
                <Link href="/" passHref>
                    Home
                </Link>
                <Link href="/chat" passHref>
                    Chat
                </Link>
            </nav>
            <div>
                {/* Main Content */}
                <Chat />
            </div>
        </div>
    );
};

export default ChatPage;
