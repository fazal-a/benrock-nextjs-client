// src/pages/index.tsx

import React from 'react';
import Home from '../components/Home';
import BottomNavigationLayout from "@/components/layout/bottomNavigationLayout";

const Index: React.FC = () => {
    return (
        <BottomNavigationLayout>
            <Home/>
        </BottomNavigationLayout>
    );
};

export default Index;
