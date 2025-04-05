import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

const Header = ({ onJoinWaitlist }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full ${isScrolled ? 'bg-[#F3EDE0]/90' : 'bg-[#F3EDE0]/80'} backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/images/Asset 1.svg" 
              alt="ForkIt Logo" 
              className="w-10 h-10 mr-2 object-contain"
            />
            <a href="#" className="text-xl font-bold text-gray-900 font-poppins">Fork<span className="text-primary-500">It</span></a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}
              className="text-gray-600 hover:text-primary-500 font-medium text-sm transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              className="text-gray-600 hover:text-primary-500 font-medium text-sm transition-colors duration-200"
            >
              About
            </a>
          </nav>
          <div>
            <button 
              onClick={onJoinWaitlist}
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#F3754E] hover:bg-[#D3552E] shadow-sm transition-colors duration-200"
            >
              Join Waitlist
            </button>
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#features"
              onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}
              className="block text-gray-600 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              className="block text-gray-600 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              About
            </a>
            <button 
              onClick={onJoinWaitlist}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 shadow-sm transition-colors duration-200"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
