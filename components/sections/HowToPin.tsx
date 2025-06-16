"use client";

import { motion } from 'framer-motion';
import { MousePointer, Pin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowToPin = () => {
  const steps = [
    {
      icon: MousePointer,
      title: 'Click Extensions Icon',
      description: 'Click the puzzle piece icon in your Chrome toolbar (top-right corner)',
      image: '🧩'
    },
    {
      icon: Pin,
      title: 'Find Blazing Tool',
      description: 'Locate "Blazing Tool" in the extensions dropdown menu',
      image: '🔍'
    },
    {
      icon: CheckCircle,
      title: 'Pin the Extension',
      description: 'Click the pin icon next to Blazing Tool to keep it visible in your toolbar',
      image: '📌'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            How to Pin Chrome Extension in Browser
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Keep Blazing Tool easily accessible by pinning it to your Chrome toolbar
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                  <CardContent className="p-0">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Icon & Emoji */}
                    <div className="mb-6">
                      <div className="text-4xl mb-3">{step.image}</div>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <step.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 text-blue-400">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pro Tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500"
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pro Tip:</h4>
                <p className="text-gray-600">
                  Once pinned, Blazing Tool will always be visible in your toolbar for quick access. 
                  You can also right-click on the extension icon for additional options and settings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToPin;