
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-health-dark flex items-center">
              <span className="text-health-blue">Smart</span>
              <span className="text-health-green ml-1">Body</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-health-dark hover:text-health-blue transition-colors">
              Fitur
            </a>
            <a href="#bmi" className="text-health-dark hover:text-health-blue transition-colors">
              BMI
            </a>
            <a href="#how-it-works" className="text-health-dark hover:text-health-blue transition-colors">
              Cara Kerja
            </a>
            <a href="#specs" className="text-health-dark hover:text-health-blue transition-colors">
              Spesifikasi
            </a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-health-blue hover:bg-health-blue/90">
              Hubungi Kami
            </Button>
          </div>
          
          <button 
            className="md:hidden text-health-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-health-dark hover:bg-health-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fitur
            </a>
            <a 
              href="#bmi" 
              className="block px-3 py-2 rounded-md text-base font-medium text-health-dark hover:bg-health-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              BMI
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-health-dark hover:bg-health-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cara Kerja
            </a>
            <a 
              href="#specs" 
              className="block px-3 py-2 rounded-md text-base font-medium text-health-dark hover:bg-health-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Spesifikasi
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-health-blue hover:bg-health-blue/90">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
