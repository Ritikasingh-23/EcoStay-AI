'use client'; 

import websiteContent from './content'; 
function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"> 
      

      <div className="max-w-6xl mx-auto px-4"> 
      
        <div className="flex flex-col md:flex-row items-center gap-10"> 
          

          <div className="flex-1"> 
           

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{websiteContent.heroTitle}</h1> 
           

            <p className="text-lg md:text-xl mb-8 text-blue-100"> 
             

              {websiteContent.heroDescription} 
             

            </p>

            <button className="bg-amber-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-amber-500 transition-colors duration-200"> 
              {websiteContent.heroButtonText}
            </button>

          </div>

          <div className="flex-1">

            <div className="bg-white/10 rounded-lg p-8 h-64 flex items-center justify-center"> 

              <span className="text-6xl">🚀</span> 

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero; // This lets other files use this component!
