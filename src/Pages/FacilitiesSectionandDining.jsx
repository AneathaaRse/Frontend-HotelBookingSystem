import React from "react";
import { useNavigate } from "react-router-dom";

const FacilitiesAndDining = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking"); // Navigate to the booking form page
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-lg font-bold">Hotel Facilities</h1>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md"
          onClick={handleBookingClick}
        >
          Booking
        </button>
      </nav>

      {/* Main Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Facilities</h2>
        <p>Explore our dining options and other facilities available at the hotel.</p>

        <div>
          <h3 className="text-xl font-bold mt-6">Dining</h3>
          {/* Add Dining Component */}
        </div>

        <div>
          <h3 className="text-xl font-bold mt-6">Other Facilities</h3>
          {/* Add FacilitiesSection Component */}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAndDining;