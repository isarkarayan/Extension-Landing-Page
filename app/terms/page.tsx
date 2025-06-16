"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsAndConditions() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-8 prose prose-gray max-w-none"
        >
          <h2>Acceptance of Terms</h2>
          <p>
            By installing and using Blazing Tool, you agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our extension.
          </p>

          <h2>License</h2>
          <p>
            Blazing Tool grants you a personal, non-exclusive, non-transferable license to use the extension 
            for your personal or commercial purposes, subject to these terms.
          </p>

          <h2>Acceptable Use</h2>
          <p>
            You agree to use Blazing Tool only for lawful purposes and in accordance with these Terms. 
            You may not use the extension in any way that could damage, disable, or impair the service.
          </p>

          <h2>Limitations of Liability</h2>
          <p>
            Blazing Tool is provided "as is" without warranties of any kind. We shall not be liable for 
            any damages arising from the use or inability to use the extension.
          </p>

          <h2>Updates and Changes</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of the extension 
            constitutes acceptance of any changes.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms & Conditions, please contact us through our support form.
          </p>
        </motion.div>
      </div>
    </div>
  );
}