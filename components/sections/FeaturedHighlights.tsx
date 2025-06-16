"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Highlights */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover why Blazing Tool is the preferred choice for professionals worldwide
          </motion.p>
        </div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Feature highlight ${index + 1}`}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Outside the carousel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Join the Elite Group of Power Users
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Download Blazing Tool today and experience the difference that 100,000+ users 
              already know. Transform your browsing experience with professional-grade features.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
            >
              <Chrome className="mr-2 h-5 w-5" />
              Install Extension
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;