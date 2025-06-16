"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-8 prose prose-gray max-w-none"
        >
          <h2>Information We Collect</h2>
          <p>
            Blazing Tool is committed to protecting your privacy. We do not collect, store, or share any personal information 
            from users of our Chrome extension. Our extension operates entirely on your local browser.
          </p>

          <h2>How We Use Information</h2>
          <p>
            Since we don't collect personal information, we don't use your data for any purposes. All extension functionality 
            operates locally within your browser without transmitting data to external servers.
          </p>

          <h2>Data Storage</h2>
          <p>
            Any settings or preferences you configure in Blazing Tool are stored locally in your browser's storage. 
            This data never leaves your device.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our extension may interact with websites you visit to provide its functionality, but we do not track 
            your browsing habits or collect information about the sites you visit.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our support form 
            on the main website.
          </p>
        </motion.div>
      </div>
    </div>
  );
}