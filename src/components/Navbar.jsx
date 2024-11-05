import { useState } from 'react'

const Navbar = () => {
  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img src="https://via.placeholder.com/32x32" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-semibold">Cbreve</span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center gap-2 bg-brand-card/30 backdrop-blur-sm rounded-full px-5 py-3">
          <NavItem text="Home" />
          <NavItem text="Company" hasDropdown />
          <NavItem text="Services" />
          <NavItem text="Testimonials" />
          <NavItem text="Case Studies" hasDropdown />
        </div>

        {/* CTA Button */}
        <button className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
          Get in Touch
          <i className="fas fa-arrow-right text-lg -rotate-45" />
        </button>
      </div>
    </nav>
  )
}

const NavItem = ({ text, hasDropdown }) => (
  <div className="flex items-center gap-2 px-4 py-2 hover:text-brand-primary transition-colors cursor-pointer">
    <span>{text}</span>
    {hasDropdown && <i className="fas fa-chevron-down text-xs" />}
  </div>
)

export default Navbar