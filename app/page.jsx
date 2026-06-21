'use client'; // Don't worry about this line - Next.js needs it!

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';
import websiteContent from '../components/content';
import { Button, Input, Modal, Toast, Loader } from '../components/ui';

// ========================================
// EcoStay AI HOME PAGE!
// ========================================
function HomePage() {
  let staysList = websiteContent.popularStays;
  let servicesList = websiteContent.services;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShowToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
  };

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
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

        {/* FOURTH: COMPONENT DEMO SECTION! */}
        <section id="component-demo" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900">Component Demo</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-green-200 space-y-8">
              {/* Button Demo */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" onClick={() => handleShowToast('success', 'Primary button clicked!')}>
                    Primary Button
                  </Button>
                  <Button variant="secondary" onClick={() => handleShowToast('info', 'Secondary button clicked!')}>
                    Secondary Button
                  </Button>
                  <Button variant="outline" onClick={() => handleShowToast('warning', 'Outline button clicked!')}>
                    Outline Button
                  </Button>
                  <Button disabled>Disabled Button</Button>
                </div>
              </div>

              {/* Input Demo */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Input</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Your Name"
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Input
                    label="Email (with error)"
                    placeholder="Enter email"
                    error="Please enter a valid email"
                  />
                </div>
              </div>

              {/* Modal Demo */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Modal</h3>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </div>

              {/* Loader Demo */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Loader</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Loader size="sm" />
                  <Loader size="md" />
                  <Loader size="lg" />
                  <Button variant="secondary" onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      handleShowToast('success', 'Loading complete!');
                    }, 1500);
                  }}>
                    {isLoading ? <Loader size="sm" className="mr-2" /> : null}
                    {isLoading ? 'Loading...' : 'Simulate Loading'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to EcoStay AI!"
      >
        <p className="text-gray-700 mb-4">
          This is a demo modal using our reusable Modal component!
        </p>
        <Button variant="primary" onClick={() => setIsModalOpen(false)}>
          Got it!
        </Button>
      </Modal>

      {/* Toast */}
      {showToast && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default HomePage;
