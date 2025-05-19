import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center group"
            >
              <span className="text-xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                La méthode Decroix
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-2">
              <NavLink to="/" text="Accueil" />
              <NavLink to="/contact" text="Contact" />
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation corrigée */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <MobileLink 
              to="/" 
              text="Accueil" 
              onClick={() => setIsOpen(false)} 
            />
            <MobileLink 
              to="/contact" 
              text="Contact" 
              onClick={() => setIsOpen(false)} 
            />
          </div>
        </div>
      )}
    </nav>
  );
}

// Composants réutilisables
function NavLink({ to, text }) {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
    >
      {text}
    </Link>
  );
}

function DropdownLink({ to, text, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
    >
      {text}
    </Link>
  );
}

function MobileLink({ to, text, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
    >
      {text}
    </Link>
  );
}