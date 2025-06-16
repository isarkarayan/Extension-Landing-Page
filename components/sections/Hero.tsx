"use client";

import { motion } from 'framer-motion';
import { Star, Download, Users, Shield, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const stats = [
    { icon: Users, label: '100,000+', subtitle: 'Active Users' },
    { icon: Star, label: '4.8/5', subtitle: '132+ Reviews' },
    { icon: Shield, label: '100%', subtitle: 'Privacy Safe' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Trusted by 100,000+ users worldwide
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Supercharge Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chrome Browser
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            The ultimate Chrome extension for enhanced productivity, privacy, and browsing experience. 
            Boost your workflow with powerful tools designed for modern professionals.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
            >
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome - Free
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.subtitle}</div>
              </div>
            ))}
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center justify-center space-x-2"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">★★★★★ (132+ reviews)</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;