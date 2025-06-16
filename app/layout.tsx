import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blazing Tool - Supercharge Your Chrome Browser',
  description: 'The ultimate Chrome extension for enhanced productivity, privacy, and browsing experience. Join 100,000+ users worldwide.',
  keywords: 'chrome extension, productivity, browser tools, privacy, speed',
  authors: [{ name: 'Ayan Sarkar' }],
  openGraph: {
    title: 'Blazing Tool - Supercharge Your Chrome Browser',
    description: 'The ultimate Chrome extension for enhanced productivity, privacy, and browsing experience.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google AdSense (Add your code below when ready)
        <script data-ad-client="ca-pub-XXXXXXXXXXXX"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
        </script>
        */}
      </head>
      <body className={inter.className}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}