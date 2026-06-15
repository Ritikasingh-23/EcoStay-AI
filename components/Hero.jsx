'use client'; // Don't worry about this line - Next.js needs it!

import websiteContent from './content'; // Import our settings file!

// ========================================
// This is the HERO component for EcoStay AI!
// Big colorful section at the top!
// ========================================
function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20"> 
      {/* Eco-friendly green gradient */}
      {/* py-20 = lots of padding at top and bottom */}

      <div className="max-w-6xl mx-auto px-4"> 
        {/* max-w-6xl = don't let it get too wide */}
        {/* mx-auto = center it */}
        {/* px-4 = padding on left and right */}

        <div className="flex flex-col md:flex-row items-center gap-10"> 
          {/* flex-col = stack on tiny screens */}
          {/* md:flex-row = side-by-side on bigger screens */}
          {/* gap-10 = space between elements */}

          <div className="flex-1"> 
            {/* flex-1 = take half the space */}

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{websiteContent.heroTitle}</h1> 
            {/* text-4xl = big text */}
            {/* md:text-5xl = bigger on medium screens */}

            <p className="text-lg md:text-xl mb-8 text-green-100"> 
              {websiteContent.heroDescription}
            </p>

            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"> 
              {/* Button matches green theme! */}
              {websiteContent.heroButtonText}
            </button>

          </div>

          <div className="flex-1">
            <div className="bg-white/10 rounded-lg p-8 h-64 flex items-center justify-center"> 
              <span className="text-6xl">🌿🏡</span> 
              {/* Nature & home emoji for eco-stay theme! */}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
