'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import websiteContent from '../../components/content';

// ========================================
// EcoStay AI ABOUT PAGE!
// ========================================
function AboutPage() {
  let featuresList = websiteContent.aboutFeatures;

  let firstAboutCard = (
    <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg border border-green-200 dark:border-gray-700"> 
      <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-green-400">{featuresList[0].title}</h3> 
      <p className="text-gray-600 dark:text-gray-300">{featuresList[0].description}</p> 
    </div>
  );
  let secondAboutCard = (
    <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg border border-green-200 dark:border-gray-700"> 
      <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-green-400">{featuresList[1].title}</h3> 
      <p className="text-gray-600 dark:text-gray-300">{featuresList[1].description}</p> 
    </div>
  );
  let thirdAboutCard = (
    <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg border border-green-200 dark:border-gray-700"> 
      <h3 className="text-xl font-bold mb-2 text-green-800 dark:text-green-400">{featuresList[2].title}</h3> 
      <p className="text-gray-600 dark:text-gray-300">{featuresList[2].description}</p> 
    </div>
  );

  return (
    <>
      <Navbar />

      <main className="flex-1 py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-green-900 dark:text-white">{websiteContent.aboutTitle}</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {websiteContent.aboutDescription1}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {websiteContent.aboutDescription2}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {firstAboutCard}
            {secondAboutCard}
            {thirdAboutCard}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
