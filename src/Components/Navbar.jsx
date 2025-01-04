import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/luxury-hotel-logo-dark.jpg";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const registeredUser = useSelector((state) => state.auth.user);


  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="StayLux Logo" className="h-8" />
          <span className="text-xl font-bold">STAYLUX</span>
        </div>

        {/* Center Links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/rooms" className="hover:text-gray-300">Rooms</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          {!isAuthenticated && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition"
              >
                Register
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <ul className="flex space-x-4">
                <li><Link to="/dining" className="hover:text-gray-300">Dining</Link></li>
                <li><Link to="/facilities" className="hover:text-gray-300">Facilities</Link></li>
                {/* <li><Link to={`/profile/${registeredUser.id}`} className="hover:text-gray-300">Profile</Link></li> */}
                <li><Link to="/booking-form" className="hover:text-gray-300">Booking Form</Link></li>
              </ul>
              <h3>Welcome, <span className="capitalize">{registeredUser.name}</span></h3>
              <Link to="/logout" className="hover:text-gray-300 px-2 rounded border border-white">Logout</Link>
            </>
          )}
        </div>
      </div>
    </nav >
  );
};

export default Navbar;