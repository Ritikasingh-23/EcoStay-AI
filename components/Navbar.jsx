'use client'; // Don't worry about this line - Next.js needs it!

import Link from 'next/link'; // For navigating between pages
import websiteContent from './content'; // Our settings file!

// ========================================
// This is the EcoStay AI NAVBAR!
// Top navigation bar!
// ========================================
function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4 sticky top-0 z-50"> 
      {/* Dark green background! */}

      <div className="max-w-6xl mx-auto flex justify-between items-center"> 

        <div className="text-xl font-bold flex items-center gap-2"> 
          <span className="text-2xl">🌿</span> 
          {websiteContent.siteName}
        </div>

        <div className="hidden md:flex gap-6"> 
          <Link href="/" className="hover:text-green-300">Home</Link>
          <Link href="/#popular-stays" className="hover:text-green-300">Popular Stays</Link>
          <Link href="/#services" className="hover:text-green-300">Features</Link>
          <Link href="/#contact" className="hover:text-green-300">Contact</Link>
          <Link href="/about" className="hover:text-green-300">About</Link>
          <Link href="/dashboard" className="hover:text-green-300">Dashboard</Link>
          <Link href="/signin" className="hover:text-green-300">Sign In</Link>
        </div>

        <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center"> 
          <span className="text-sm">👤</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
