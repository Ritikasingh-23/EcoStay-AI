'use client'; // Don't worry about this line - Next.js needs it!

import { useState } from 'react'; // Remember what user types!
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import websiteContent from '../../components/content';

// ========================================
// EcoStay AI SIGN IN PAGE!
// ========================================
function SigninPage() {
  let [emailInput, setEmailInput] = useState('');
  let [passwordInput, setPasswordInput] = useState('');
  let [messageText, setMessageText] = useState('');
  let [messageColorClass, setMessageColorClass] = useState('');

  function handleSigninClick(event) {
    event.preventDefault();
    if (emailInput !== '' && passwordInput !== '') {
      setMessageText('Welcome back to EcoStay AI! 🎉');
      setMessageColorClass('bg-green-100 text-green-800');
    } else {
      setMessageText('Please fill in both email and password!');
      setMessageColorClass('bg-red-100 text-red-800');
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 bg-white dark:bg-gray-900">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-900 dark:text-white">{websiteContent.signinTitle}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Ready for your next eco-friendly adventure? Sign in!
          </p>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-green-200 dark:border-gray-700">
            {messageText && (
              <p className={`mb-4 p-3 rounded-lg text-center ${messageColorClass}`}>
                {messageText}
              </p>
            )}

            <form onSubmit={handleSigninClick}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-green-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  placeholder="your@email.com"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-green-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" 
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(event) => setPasswordInput(event.target.value)}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Sign In
              </button>

            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SigninPage;
