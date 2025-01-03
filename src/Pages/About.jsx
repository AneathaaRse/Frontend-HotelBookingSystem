import React from "react";

const About = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center p-8" 
      style={{ backgroundImage: "url('/assets/about.jpg')" }} // Path to your image
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our website! We are dedicated to providing you with the best
          hospitality services tailored to your needs. Our team is committed to ensuring
          your stay is comfortable, enjoyable, and unforgettable.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To create a space where guests can relax, rejuvenate, and enjoy the
            highest standard of service. We aim to exceed expectations and deliver
            an exceptional experience every time.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a globally recognized hospitality brand that inspires trust,
            comfort, and innovation. We envision creating a community of
            satisfied and loyal guests.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Luxurious and comfortable rooms</li>
            <li>Exceptional dining experience</li>
            <li>State-of-the-art facilities</li>
            <li>Friendly and professional staff</li>
            <li>Unmatched customer satisfaction</li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">Experience the Difference!</h3>
          <p className="text-gray-700 mt-2">
            Book your stay with us today and become a part of our story. We look forward to
            serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;