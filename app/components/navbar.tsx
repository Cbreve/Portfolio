'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Company', href: '/company', dropdownItems: [
      { title: 'About', href: '/company/about' },
      { title: 'Team', href: '/company/team' },
    ]},
    { title: 'Services', href: '/services' },
    { title: 'Testimonials', href: '/testimonials' },
    { title: 'Case Studies', href: '/case-studies', dropdownItems: [
      { title: 'Success Stories', href: '/case-studies/success' },
      { title: 'Client Projects', href: '/case-studies/projects' },
    ]},
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo2.png"
              alt="Cbreve Logo"
              width={120}
              height={70}
              className="h-1/4 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center text-white hover:text-blue-400 transition-colors ${
                    pathname === item.href ? 'text-blue-400' : ''
                  }`}
                >
                  {item.title}
                  {item.dropdownItems && (
                    <FiChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>
                {item.dropdownItems && (
                  <div className="absolute hidden group-hover:block w-48 bg-black/95 mt-2 rounded-md shadow-lg">
                    {item.dropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.title}
                        href={dropItem.href}
                        className={`block px-4 py-2 text-sm text-white hover:bg-blue-600 rounded-md ${
                          pathname === dropItem.href ? 'bg-blue-600' : ''
                        }`}
                      >
                        {dropItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-blue-600/20"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              {navItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-white hover:bg-blue-600 rounded-md ${
                        pathname === item.href ? 'bg-blue-600' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.dropdownItems && (
                      <FiChevronDown className="w-4 h-4 text-white mr-2" />
                    )}
                  </div>
                  {item.dropdownItems && (
                    <div className="pl-4">
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          href={dropItem.href}
                          className={`block px-3 py-2 text-sm text-gray-300 hover:bg-blue-600 rounded-md ${
                            pathname === dropItem.href ? 'bg-blue-600' : ''
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar