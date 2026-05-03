import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
    title: 'Alphabaijinde | Robotics Simulation & AI Agent Systems',
    description:
        'Simulation-first robotics workflows, autonomous-system tooling, and local AI-agent automation by Alphabaijinde.',
    icons: {
        icon: '/favicon.png',
    },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="zh-CN">
            <body>
                <div className="site-shell">
                    <header className="site-header">
                        <div className="site-header__inner">
                            <Link href="/" className="brand">
                                <span className="brand__name">Alphabaijinde</span>
                                <span className="brand__role">Robotics simulation / AI agents</span>
                            </Link>
                            <Navigation />
                        </div>
                    </header>
                    <main className="main">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default Layout;
