"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About the Developer</h1>
          <p className="text-gray-600">Meet the creator behind Blazing Tool</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="md:flex">
            {/* Author Image */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                AS
              </div>
            </div>

            {/* Author Info */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayan Sarkar</h2>
              <p className="text-lg text-blue-600 mb-6">Full Stack Developer & Chrome Extension Specialist</p>
              
              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hi! I'm Ayan Sarkar, a passionate full-stack developer with over 5 years of experience 
                  in creating innovative web solutions and browser extensions. I specialize in building 
                  tools that enhance productivity and improve user experiences.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Blazing Tool was born from my personal need for a comprehensive Chrome extension that 
                  could handle multiple productivity tasks without compromising on performance or privacy. 
                  What started as a personal project has now grown to serve over 100,000 users worldwide.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  I believe in creating software that respects user privacy while delivering exceptional 
                  functionality. Every feature in Blazing Tool is carefully crafted with user feedback 
                  and real-world usage scenarios in mind.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Expertise</h3>
                <ul className="text-gray-600 space-y-1 mb-6">
                  <li>• Chrome Extension Development</li>
                  <li>• JavaScript, TypeScript, React</li>
                  <li>• Node.js, Python, PHP</li>
                  <li>• UI/UX Design & Optimization</li>
                  <li>• Performance & Security Best Practices</li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission Statement</h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            "To create browser tools that empower users to be more productive while maintaining 
            complete control over their privacy and data. Every line of code is written with the 
            user's best interests in mind."
          </p>
        </motion.div>
      </div>
    </div>
  );
}