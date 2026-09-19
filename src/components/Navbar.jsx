
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

         
          <Link to="/" className="text-xl font-bold">
            Movie
            <span className="text-orange-500">Explorer</span>
          </Link>

       
          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="text-gray-300 hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-300 hover:text-orange-500"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-orange-500"
            >
              Contact
            </Link>

            <Link
              to="/movies"
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
            >
              Explore Movies
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

