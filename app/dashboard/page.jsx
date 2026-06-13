'use client'; // Don't worry about this line - Next.js needs it!

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import websiteContent from '../../components/content';

// ========================================
// This is the DASHBOARD PAGE!
// ========================================
function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">{websiteContent.dashboardTitle}</h1>
          <p className="text-lg text-gray-700 mb-8">
            This is your dashboard! Here you can manage your account, view your stats, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">RISHI-CONNECT Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">RISHI-CONNECT Revenue</h3>
              <p className="text-3xl font-bold text-green-600">$45,678</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">RISHI-CONNECT Orders</h3>
              <p className="text-3xl font-bold text-purple-600">89</p>
            </div>
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">RISHI-CONNECT Visitors</h3>
              <p className="text-3xl font-bold text-orange-600">5,678</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DashboardPage;
