import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              OTP Sender
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link
              to="/contacts"
              className="hover:text-blue-200 transition-colors"
            >
              Contacts
            </Link>
            <Link
              to="/history"
              className="hover:text-blue-200 transition-colors"
            >
              History
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block hover:bg-blue-700 rounded px-3 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/contacts"
              className="block hover:bg-blue-700 rounded px-3 py-2"
              onClick={toggleMenu}
            >
              Contacts
            </Link>
            <Link
              to="/history"
              className="block hover:bg-blue-700 rounded px-3 py-2"
              onClick={toggleMenu}
            >
              History
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
