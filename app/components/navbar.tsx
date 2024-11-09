/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './navbar.css';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full h-28 z-50 px-6 py-4 transition-colors duration-300 ${isScrolled ? 'bg-[#191919]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-auto h-24">
                        <img src="/logo2.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="hidden lg:flex items-center gap-2 bg-brand-card/30 backdrop-blur-sm rounded-full px-5 py-3 styling">
                    <div className="flex items-center gap-2 px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                        <span>Home</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                        <span>Company</span>
                        <FaChevronDown className="text-xs" />
                    </div>
                    <div className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                        Services
                    </div>
                    <div className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                        Testimonials
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                        <span>Case Studies</span>
                        <FaChevronDown className="text-xs" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
                        Get in Touch
                        <FaArrowRight className="text-lg -rotate-45" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-brand-card/30 backdrop-blur-sm rounded-lg mt-2 p-4">
                    <div className="flex flex-col gap-2">
                        <div className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">Home</div>
                        <div className="flex items-center justify-between px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                            <span>Company</span>
                            <FaChevronDown className="text-xs" />
                        </div>
                        <div className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">Services</div>
                        <div className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">Testimonials</div>
                        <div className="flex items-center justify-between px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                            <span>Case Studies</span>
                            <FaChevronDown className="text-xs" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;