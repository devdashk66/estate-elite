"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import {
  FaBars,
  FaBuilding,
  FaHome,
  FaSearch,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome className="mr-2" /> },
    {
      name: "Properties",
      href: "/properties",
      icon: <FaBuilding className="mr-2" />,
    },
    { name: "Search", href: "/search", icon: <FaSearch className="mr-2" /> },
    {
      name: "Agents",
      href: "/agents",
      icon: <MdRealEstateAgent className="mr-2" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <BiSolidContact className="mr-2" />,
    },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                EstateElite
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center text-sm font-medium hover:text-blue-500 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link
              href="/account"
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <FaUser className="mr-2" />
              <span>My Account</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-gray-700 hover:text-blue-600 py-3 px-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              href="/account"
              className="flex items-center bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className="mr-2" />
              <span>My Account</span>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
