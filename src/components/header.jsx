import React from 'react';

const Header = () => {
    return (
        <header id="header" className="bg-blue-600 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-white text-3xl font-semibold">ToDo-List</h1>
                </div>
                <div className="navbar space-x-4">
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                    <a href="/about" className="text-white hover:text-gray-300">About</a>
                </div>
            </div>
        </header>
    );
};

export default Header;


