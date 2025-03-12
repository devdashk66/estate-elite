"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-500">
                  EstateElite
                </span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Your trusted partner in finding the perfect property. We make real
              estate simple, transparent, and successful.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Properties", href: "/properties" },
                { name: "Agents", href: "/agents" },
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li
                  key={link.name}
                  className="transition-transform duration-300 hover:translate-x-2"
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <FaArrowRight className="mr-2 text-xs text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  1234 Real Estate Ave, <br />
                  Suite 500, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-3" />
                <a
                  href="tel:+12125551234"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <a
                  href="mailto:info@estateelite.com"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  info@estateelite.com
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="font-medium mb-2">Office Hours:</h4>
              <p className="text-gray-400">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500">
              Newsletter
            </h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest property listings,
              market updates, and real estate tips.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our privacy policy and consent to
              receive email updates.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Awards & Certifications */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-center text-lg font-semibold mb-6">
              Our Partners & Certifications
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <div className="w-24 h-12 relative bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-400">
                      Partner Logo {i}
                    </span>
                    {/* Replace with actual partner logos */}
                    {/* <Image src={`/images/partner-${i}.png`} alt={`Partner ${i}`} fill style={{ objectFit: 'contain' }} /> */}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} EstateElite. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/terms"
                className="hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/sitemap"
                className="hover:text-blue-500 transition-colors"
              >
                Sitemap
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/accessibility"
                className="hover:text-blue-500 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
