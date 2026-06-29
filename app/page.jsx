'use client'; // Don't worry about this line - Next.js needs it!

import { useState, useEffect } from 'react';
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
  let servicesList = websiteContent.services;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [staysList, setStaysList] = useState([]);
  const [isStaysLoading, setIsStaysLoading] = useState(true);
  const [staysError, setStaysError] = useState(null);

  useEffect(() => {
    const fetchStays = async () => {
      try {
        setIsStaysLoading(true);
        const res = await fetch('http://localhost:8000/api/stays');
        if (!res.ok) throw new Error('Failed to fetch stays');
        const data = await res.json();
        setStaysList(data);
      } catch (err) {
        setStaysError(err.message);
        handleShowToast('error', `Error: ${err.message}`);
      } finally {
        setIsStaysLoading(false);
      }
    };
    fetchStays();
  }, []);

  const handleShowToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
  };

  // Stay Cards
  let stayCards = staysList.map((stay, index) => (
    <Card 
      key={stay.id}
      title={stay.title} 
      description={stay.description} 
      location={stay.location}
      price={stay.price}
    />
  ));

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
        <section id="popular-stays" className="py-16 bg-green-50 dark:bg-gray-900"> 
          <div className="max-w-6xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900 dark:text-white">{websiteContent.popularStaysTitle}</h2> 
            {isStaysLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader size="lg" />
              </div>
            ) : staysError ? (
              <div className="text-center py-12 text-red-500">
                <p>Error loading stays: {staysError}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
                {stayCards}
              </div>
            )}
          </div>
        </section>

        {/* SECOND: FEATURES SECTION! */}
        <section id="services" className="py-16 bg-white dark:bg-gray-800"> 
          <div className="max-w-6xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900 dark:text-white">{websiteContent.servicesTitle}</h2> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
              {firstFeatureCard}
              {secondFeatureCard}
              {thirdFeatureCard}
            </div>
          </div>
        </section>

        {/* THIRD: CONTACT SECTION! */}
        <section id="contact" className="py-16 bg-green-50 dark:bg-gray-900"> 
          <div className="max-w-4xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900 dark:text-white">{websiteContent.contactTitle}</h2> 
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-green-200 dark:border-gray-700"> 
              <p className="text-gray-700 dark:text-gray-300 mb-6">Ready to start your eco-friendly adventure? We're here to help!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                <div> 
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <p className="text-gray-600 dark:text-gray-400">{websiteContent.contactEmail}</p> 
                </div>
                <div> 
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <p className="text-gray-600 dark:text-gray-400">{websiteContent.contactPhone}</p> 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOURTH: COMPONENT DEMO SECTION! */}
        <section id="component-demo" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-900 dark:text-white">Component Demo</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-green-200 dark:border-gray-700 space-y-8">
              {/* Button Demo */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Buttons</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Input</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Modal</h3>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </div>

              {/* Loader Demo */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Loader</h3>
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
