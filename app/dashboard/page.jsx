'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import websiteContent from '../../components/content';

// ========================================
// EcoStay AI DASHBOARD PAGE!
// ========================================
function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-green-900">{websiteContent.dashboardTitle}</h1>
          <p className="text-lg text-gray-700 mb-8">
            Welcome back! Manage your bookings, view your saved stays, and plan your next eco-adventure!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Rearranged stats! */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Upcoming Trips</h3>
              <p className="text-3xl font-bold text-green-700">2</p>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">CO₂ Saved</h3>
              <p className="text-3xl font-bold text-green-700">450 kg</p>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Total Bookings</h3>
              <p className="text-3xl font-bold text-green-700">12</p>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Local Communities Supported</h3>
              <p className="text-3xl font-bold text-green-700">8</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DashboardPage;
