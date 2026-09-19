
import { useState } from "react";
import { Link } from "react-router";
import LoginModal from "./MovieModal";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <>
      <nav className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              🎬 Movie
              <span className="text-orange-500">
                Explorer
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-6">

              <Link
                to="/"
                className="text-gray-300 hover:text-orange-500"
              >
                Home
              </Link>

              <Link
                to="/movies"
                className="bg-orange-500 hover:bg-orange-600
                px-4 py-2 rounded-lg"
              >
                Explore Movies
              </Link>

             

            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
};

export default Navbar;

