// src/pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Home from '../components/Home';
import Layout from "@/components/layout/layout";

const Index: React.FC = () => {
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
            <Layout>
          <Home />
            </Layout>
        </div>
      </div>
  );
};

export default Index;
