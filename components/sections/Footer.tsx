"use client";

import { motion } from 'framer-motion';
import { Youtube, Globe, Chrome, Monitor } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Chrome, href: '#', label: 'Chrome Web Store' },
    { icon: Monitor, href: '#', label: 'Microsoft Store' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Chrome Web Store', href: '#' },
    { label: 'Microsoft Store', href: '#' },
    { label: 'Other Tools', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white pb-24 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Blazing Tool
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                The ultimate Chrome extension for enhanced productivity, privacy, and browsing experience. 
                Trusted by over 100,000 users worldwide for professional-grade browser enhancement.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm opacity-75">
            Copyright © {currentYear} Blazing Tool. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm opacity-75 mt-2 md:mt-0">
            Developed & Managed by Ayan Sarkar
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;