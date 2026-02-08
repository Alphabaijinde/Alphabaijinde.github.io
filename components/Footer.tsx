import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                borderTop: '1px solid rgba(148, 163, 184, 0.2)',
                padding: '32px 20px 40px',
                background: 'rgba(11, 15, 26, 0.8)',
            }}
        >
            <div
                style={{
                    maxWidth: 1080,
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#94a3b8',
                    fontSize: 14,
                }}
            >
                <div>
                    &copy; {new Date().getFullYear()} Alphabaijinde. All rights reserved.
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                    <a
                        href="https://github.com/Alphabaijinde"
                        style={{ color: '#e2e8f0', textDecoration: 'none' }}
                    >
                        GitHub
                    </a>
                    <Link href="/contact" style={{ color: '#e2e8f0', textDecoration: 'none' }}>
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
