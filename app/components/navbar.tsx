"use client"

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="bg-emerald-700 h-16 flex justify-center items-center px-4 relative z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">My Website</div>
                    {/* pc view */}
                    <ul className="hidden md:flex space-x-4">
                        <li><a href="#" className="link transition-all duration-500 text-white">Home</a></li>
                        <li><a href="#" className="link transition-all duration-500 text-white">About</a></li>
                        <li><a href="#" className="link transition-all duration-500 text-white">Services</a></li>
                        <li><a href="#" className="link transition-all duration-500 text-white">Contact</a></li>
                    </ul>
                    {/* the menu icon */}
                    <div className="flex md:hidden justify-center items-center z-50" onClick={toggleMenu}>
                        {isMenuOpen ? <MdClose size={32} className="text-white" /> : <BiMenu size={32} className="text-white" />}
                    </div>
                </div>
                {/* hamburger menu!! */}
                <div
                    className={`md:hidden absolute top-16 left-0 w-full bg-emerald-700 transform transition-all duration-300 origin-top ${
                        isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
                    }`}
                >
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><a href="#" className="text-white" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#" className="text-white" onClick={toggleMenu}>About</a></li>
                        <li><a href="#" className="text-white" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#" className="text-white" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
