import { Link } from "react-router-dom";
import logo from "../../public/logo (2).png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div>
            <Link
              to="/login"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
