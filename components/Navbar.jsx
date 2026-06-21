'use client'; // Don't worry about this line - Next.js needs it!

import Link from 'next/link'; // For navigating between pages
import websiteContent from './content'; // Our settings file!
import { DarkModeToggle } from './ui';

// ========================================
// This is the EcoStay AI NAVBAR!
// Top navigation bar!
// ========================================
function Navbar() {
  return (
    <nav className="bg-green-900 dark:bg-gray-900 text-white p-4 sticky top-0 z-50"> 
      {/* Dark green background (light mode) / gray (dark mode)! */}

      <div className="max-w-6xl mx-auto flex justify-between items-center"> 

        <div className="text-xl font-bold flex items-center gap-2"> 
          <span className="text-2xl">🌿</span> 
          {websiteContent.siteName}
        </div>

        <div className="hidden md:flex gap-6 items-center"> 
          <Link href="/" className="hover:text-green-300 dark:hover:text-green-400">Home</Link>
          <Link href="/#popular-stays" className="hover:text-green-300 dark:hover:text-green-400">Popular Stays</Link>
          <Link href="/#services" className="hover:text-green-300 dark:hover:text-green-400">Features</Link>
          <Link href="/#contact" className="hover:text-green-300 dark:hover:text-green-400">Contact</Link>
          <Link href="/about" className="hover:text-green-300 dark:hover:text-green-400">About</Link>
          <Link href="/dashboard" className="hover:text-green-300 dark:hover:text-green-400">Dashboard</Link>
          <Link href="/signin" className="hover:text-green-300 dark:hover:text-green-400">Sign In</Link>
          <DarkModeToggle />
        </div>

        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <DarkModeToggle />
          </div>
          <div className="w-8 h-8 rounded-full bg-green-700 dark:bg-gray-700 flex items-center justify-center"> 
            <span className="text-sm">👤</span>
          </div>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
