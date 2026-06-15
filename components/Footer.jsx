// ========================================
// This is the EcoStay AI FOOTER!
// Bottom bar!
// ========================================
import websiteContent from './content';

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-auto"> 
      <div className="max-w-6xl mx-auto px-4"> 
        <div className="flex flex-col md:flex-row justify-between items-center gap-4"> 

          <div className="text-green-300"> 
            © 2026 {websiteContent.siteName}. All rights reserved. 
          </div>

          <div className="flex gap-6"> 
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
              Twitter
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
