import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Welcome to Alphabaijinde's Site</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2026 Alphabaijinde</p>
            </footer>
        </div>
    );
};

export default Layout;
