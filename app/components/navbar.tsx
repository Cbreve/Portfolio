/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);

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
                <div className="hidden lg:flex items-center gap-2 bg-brand-card/30 backdrop-blur-sm rounded-full px-5 py-3">
                    <div className="flex items-center gap-2 px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                        <span><Link href="/">Home</Link></span>
                    </div>
                    {/* Company dropdown with hover */}
                    <div 
                        className="relative group"
                        onMouseEnter={() => setCompanyDropdownOpen(true)}
                        onMouseLeave={() => setCompanyDropdownOpen(false)}
                    >
                        <div className="flex items-center gap-2 px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
                            <span>Company</span>
                            <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                        </div>
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-2 w-48 bg-black backdrop-blur-sm rounded-lg p-2 transition-all duration-200 ${isCompanyDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="flex flex-col gap-1">
                                <a href="/about-us" className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer rounded-md hover:bg-white/10">About Us</a>
                                <a href="/our-team" className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer rounded-md hover:bg-white/10">Our Team</a>
                                <a href="/why-choose-us" className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer rounded-md hover:bg-white/10">Why Choose Us</a>
                                <a href="/our-values" className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer rounded-md hover:bg-white/10">Our Values</a>
                                <a href="/careers" className="px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer rounded-md hover:bg-white/10">Careers</a>
                            </div>
                        </div>
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
                        <div className="flex items-center justify-between px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer" onClick={() => setCompanyDropdownOpen(!isCompanyDropdownOpen)}>
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