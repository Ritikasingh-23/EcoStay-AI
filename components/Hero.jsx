'use client'; // Don't worry about this line - Next.js needs it!

import websiteContent from './content'; // This imports our "settings" file!

// ========================================
// This is the HERO component!
// It's the big colorful section at the top of the home page!
// ========================================
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"> 
      {/* bg-gradient-to-r = a color gradient that goes from left to right */}
      {/* from-blue-600 = gradient starts with blue */}
      {/* to-indigo-700 = gradient ends with dark purple-blue */}
      {/* py-20 = lots of padding at the top and bottom */}

      <div className="max-w-6xl mx-auto px-4"> 
        {/* max-w-6xl = don't let it get too wide */}
        {/* mx-auto = center it on the page */}
        {/* px-4 = padding on left and right */}

        <div className="flex flex-col md:flex-row items-center gap-10"> 
          {/* flex-col = stack things top-to-bottom on tiny screens */}
          {/* md:flex-row = line things up side-by-side on bigger screens */}
          {/* gap-10 = put lots of space between things */}

          <div className="flex-1"> 
            {/* flex-1 = this part takes up half the space */}

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{websiteContent.heroTitle}</h1> 
            {/* text-4xl = really big text! */}
            {/* md:text-5xl = even bigger text on bigger screens! */}
            {/* font-bold = bold text */}
            {/* mb-4 = space below the title */}
            {/* This shows our hero title from the settings file! */}

            <p className="text-lg md:text-xl mb-8 text-blue-100"> 
              {/* text-lg = large text */}
              {/* md:text-xl = extra large on bigger screens */}
              {/* mb-8 = lots of space below the paragraph */}
              {/* text-blue-100 = light blue text */}

              {websiteContent.heroDescription} 
              {/* This shows our hero description from the settings file! */}

            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"> 
              {/* bg-white = white background for the button */}
              {/* text-blue-600 = blue text */}
              {/* px-6 = padding on left and right of button */}
              {/* py-3 = padding on top and bottom of button */}
              {/* rounded-lg = rounded corners */}
              {/* font-semibold = semi-bold text */}
              {/* hover:bg-blue-50 = turn light blue when hovered */}
              {/* transition-colors = smooth color change when hovering */}

              {websiteContent.heroButtonText} 
              {/* This shows our button text from the settings file! */}

            </button>

          </div>

          <div className="flex-1"> 
            {/* flex-1 = this part takes up the other half of the space */}

            <div className="bg-white/10 rounded-lg p-8 h-64 flex items-center justify-center"> 
              {/* bg-white/10 = white but almost transparent (10% visible) */}
              {/* rounded-lg = rounded corners */}
              {/* p-8 = lots of padding */}
              {/* h-64 = 64 units tall */}
              {/* flex items-center justify-center = put the emoji in the middle */}

              <span className="text-6xl">🚀</span> 
              {/* text-6xl = REALLY big emoji! */}
              {/* This is a rocket ship emoji! 🚀 */}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero; // This lets other files use this component!
