"use client"

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav
                className={`h-16 flex justify-center items-center px-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
                  isScrolled ? "bg-emerald-700/60 shadow-md" : "bg-emerald-700"
                }`}
            >
                <div className="w-full flex justify-between items-center px-12">
                    <div className="text-white text-lg font-bold">My Website</div>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4">
                        <li><a href="#" className="link transition-all duration-500">Home</a></li>
                        <li><a href="#cards" className="link transition-all duration-500">About</a></li>
                        <li><a href="#" className="link transition-all duration-500">Services</a></li>
                        <li><a href="#" className="link transition-all duration-500">Contact</a></li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div className="flex md:hidden justify-center items-center z-50" onClick={toggleMenu}>
                        {isMenuOpen ? <MdClose size={32} className="text-white" /> : <BiMenu size={32} className="text-white" />}
                    </div>
                </div>
                {/* Mobile Menu with transition */}
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
