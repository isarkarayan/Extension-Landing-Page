"use client";

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import HowToPin from '@/components/sections/HowToPin';
import FeaturedHighlights from '@/components/sections/FeaturedHighlights';
import Footer from '@/components/sections/Footer';
import ChatSupport from '@/components/ChatSupport';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowToPin />
      <FeaturedHighlights />
      <Footer />
      <ChatSupport />
    </main>
  );
}