import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer__inner">
                <div>&copy; {new Date().getFullYear()} Alphabaijinde. Simulation-first systems.</div>
                <div className="footer-links">
                    <a href="https://github.com/Alphabaijinde">
                        GitHub
                    </a>
                    <Link href="/projects">
                        Projects
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
