//pages/camera.tsx
import React from 'react';
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";
import {AuthGuard} from "@/guards/auth-guard";
import Page from "@/components/camera";

const ChatPage: React.FC = () => {

    return (
        <div>
            <AuthGuard>
                <BottomNavigationLayout>
                    <Page />
                </BottomNavigationLayout>
            </AuthGuard>
        </div>
    );
};

export default ChatPage;
