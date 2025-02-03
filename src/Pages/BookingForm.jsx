
import React, { useState } from "react";
import BookingHistory from './BookingHistory';
import {useNavigate} from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    adults: 1,
    children: 0,
    checkIn: "",
    checkOut: "",
    roomType: "",
    status:"Pending"
  });

  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required.";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required.";
    if (!formData.roomType) newErrors.roomType = "Please select a room type.";
    if (!formData.hotelName) newErrors.hotelName = "Hotel name is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
      storedFormData.push(formData);
      //localStorage.setItem('formData', JSON.stringify(storedFormData));
      try {
        const response = await fetch('https://backend-hotelbookingsystem-2.onrender.com/api/hotels/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Convert form data to JSON
        });

       // const result = await response.json();
        console.log("test");
        console.log(response);

        if (response.ok) {
            const data = await response.json();
            

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        adults: 1,
        children: 0,
        checkIn: "",
        checkOut: "",
        roomType: "",
        status: "Pending",
        hotelname: ""
      });
      alert("Booking submitted successfully!");
      navigate('/booking-history');
        } else {
            const errorData = await response.json();
           // setResponseMessage(errorData.message || 'Error submitting form');
           alert(errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
       // setResponseMessage('An error occurred. Please try again later.');
    }
      
      
    }
  };

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Booking Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Section */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Adults and Children */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="adults">
                Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="children">
                Children
              </label>
              <input
                type="number"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Check-In and Check-Out */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="checkIn">
                Check-In Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.checkIn && (
                <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="checkOut">
                Check-Out Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.checkOut && (
                <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
              )}
            </div>
          </div>

          {/* Room Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="roomType">
              Room Type <span className="text-red-500">*</span>
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a room type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
            {errors.roomType && (
              <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="roomType">
            Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>


          </div>
          <div className="mb-4">
  <label className="block text-gray-700 font-semibold mb-2" htmlFor="hotelName">
    Hotel Name <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    id="hotelName"
    name="hotelName"
    value={formData.hotelName}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  {errors.hotelName && (
    <p className="text-red-500 text-sm mt-1">{errors.hotelName}</p>
  )}
</div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Booking
          </button>
        </form>

        {/* Breakfast Notification */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 font-medium">
            <strong>Breakfast is complimentary.</strong> Timings: 8:00 AM - 10:00 AM.
          </p>
        </div>
      </div>
    </div> 

    </>
  );
};

export default BookingForm;
