import React from 'react';
import Link from 'next/link';

const linkStyle: React.CSSProperties = {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontSize: 14,
    letterSpacing: 0.3,
    padding: '6px 10px',
    borderRadius: 999,
    transition: 'all 0.2s ease',
};

const Navigation = () => {
    return (
        <nav aria-label="Primary">
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: 8,
                    margin: 0,
                    padding: 0,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <li>
                    <Link href="/" style={linkStyle}>
                        首页
                    </Link>
                </li>
                <li>
                    <Link href="/about" style={linkStyle}>
                        关于
                    </Link>
                </li>
                <li>
                    <Link href="/projects" style={linkStyle}>
                        项目
                    </Link>
                </li>
                <li>
                    <Link href="/contact" style={linkStyle}>
                        联系
                    </Link>
                </li>
                <li>
                    <a
                        href="https://github.com/Alphabaijinde"
                        style={{
                            ...linkStyle,
                            background: 'rgba(148, 163, 184, 0.12)',
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                        }}
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
