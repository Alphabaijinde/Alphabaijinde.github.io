import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav aria-label="Primary">
            <ul className="nav-list">
                <li>
                    <Link href="/" className="nav-link">
                        首页
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="nav-link">
                        关于
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="nav-link">
                        项目
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="nav-link">
                        联系
                    </Link>
                </li>
                <li>
                    <a href="mailto:baijindegus@gmail.com" className="nav-link nav-link--primary">
                        合作咨询
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
