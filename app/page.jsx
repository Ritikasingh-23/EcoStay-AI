'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';
import websiteContent from '../components/content';

// ========================================
// EcoStay AI HOME PAGE!
// ========================================
function HomePage() {
  let staysList = websiteContent.popularStays;
  let servicesList = websiteContent.services;

  // 1st Popular Stay Card
  let firstStayCard = (
    <Card 
      title={staysList[0].title} 
      description={staysList[0].description} 
      location={staysList[0].location}
      price={staysList[0].price}
    />
  );
  let secondStayCard = (
    <Card 
      title={staysList[1].title} 
      description={staysList[1].description} 
      location={staysList[1].location}
      price={staysList[1].price}
    />
  );
  let thirdStayCard = (
    <Card 
      title={staysList[2].title} 
      description={staysList[2].description} 
      location={staysList[2].location}
      price={staysList[2].price}
    />
  );

  let firstFeatureCard = (
    <Card 
      title={servicesList[0].title} 
      description={servicesList[0].description} 
    />
  );
  let secondFeatureCard = (
    <Card 
      title={servicesList[1].title} 
      description={servicesList[1].description} 
    />
  );
  let thirdFeatureCard = (
    <Card 
      title={servicesList[2].title} 
      description={servicesList[2].description} 
    />
  );

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* FIRST: POPULAR STAYS SECTION! */}
        <section id="popular-stays" className="py-16 bg-green-50"> 
          <div className="max-w-6xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900">{websiteContent.popularStaysTitle}</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
              {/* Changed to 2 columns on desktop! */}
              {firstStayCard}
              {secondStayCard}
              {thirdStayCard}
            </div>
          </div>
        </section>

        {/* SECOND: FEATURES SECTION! */}
        <section id="services" className="py-16"> 
          <div className="max-w-6xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900">{websiteContent.servicesTitle}</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
              {/* Changed to 2 columns on desktop! */}
              {firstFeatureCard}
              {secondFeatureCard}
              {thirdFeatureCard}
            </div>
          </div>
        </section>

        {/* THIRD: CONTACT SECTION! */}
        <section id="contact" className="py-16 bg-green-50"> 
          <div className="max-w-4xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900">{websiteContent.contactTitle}</h2> 
            <div className="bg-white p-8 rounded-lg shadow-sm border border-green-200"> 
              <p className="text-gray-700 mb-6">Ready to start your eco-friendly adventure? We're here to help!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                <div> 
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <p className="text-gray-600">{websiteContent.contactEmail}</p> 
                </div>
                <div> 
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <p className="text-gray-600">{websiteContent.contactPhone}</p> 
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default HomePage;
