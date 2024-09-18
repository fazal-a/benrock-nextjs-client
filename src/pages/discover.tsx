//pages/discover.tsx
import React from 'react';
import {AuthGuard} from "@/guards/auth-guard";
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";
import Page from "@/components/discover";

const Discover: React.FC = () => {
    return (
        <AuthGuard>
            <BottomNavigationLayout>
                <Page/>
            </BottomNavigationLayout>
        </AuthGuard>
    );
};

export default Discover;
