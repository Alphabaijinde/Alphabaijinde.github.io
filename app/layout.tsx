import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="zh-CN">
            <body
                style={{
                    minHeight: '100vh',
                    background: 'radial-gradient(circle at top, #1e293b 0%, #0b0f1a 60%)',
                    color: '#e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 0,
                    fontFamily:
                        '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
            >
                <header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        backdropFilter: 'blur(12px)',
                        background: 'rgba(11, 15, 26, 0.7)',
                        borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1080,
                            margin: '0 auto',
                            padding: '20px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 16,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                color: '#f8fafc',
                                textDecoration: 'none',
                                fontSize: 20,
                                fontWeight: 700,
                                letterSpacing: 0.6,
                            }}
                        >
                            Alphabaijinde
                        </Link>
                        <Navigation />
                    </div>
                </header>
                <main style={{ flex: 1 }}>
                    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 20px 80px' }}>
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
