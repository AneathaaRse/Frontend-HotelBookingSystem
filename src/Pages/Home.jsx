
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import hotelbg from "../assets/hotelimage.jpg"; // Adjust path as needed

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const handleBookNowBtn = () => {
    !isAuthenticated ? navigate("/login") : navigate("/booking-form");
  }
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hotelbg})`,
      }}
    >
      <div
        className="flex flex-col items-center justify-center text-center h-full text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Optional overlay for better readability
      >
        <h1
          className="text-5xl font-bold mb-4"
          style={{ transform: "translateY(-40px)" }} // Move the heading slightly upwards
        >
          Welcome to StayLux
        </h1>
        <p className="text-lg max-w-md">
          Experience the ultimate luxury and comfort during your stay at our premium hotel. Explore our rooms, dining, and facilities for a truly unforgettable experience.
        </p>
        <button onClick={handleBookNowBtn}
          className="absolute bottom-8 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
