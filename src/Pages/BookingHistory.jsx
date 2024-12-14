import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const BookingHistory = () => {
  // Sample booking data
  const [bookings] = useState([
    {
      id: "#12345",
      hotelName: "Hotel Paradise",
      checkIn: new Date("2024-12-10"),
      checkOut: new Date("2024-12-15"),
      status: "Completed",
    },
    {
      id: "#12346",
      hotelName: "Seaside Resort",
      checkIn: new Date("2024-11-20"),
      checkOut: new Date("2024-11-25"),
      status: "Cancelled",
    },
    {
      id: "#12347",
      hotelName: "Mountain View",
      checkIn: new Date("2024-10-01"),
      checkOut: new Date("2024-10-05"),
      status: "Completed",
    },
  ]);

  return (
    <section className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Booking History</h2>

      <table className="min-w-full table-auto bg-white border-collapse shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 text-left">Booking ID</th>
            <th className="py-3 px-4 text-left">Hotel Name</th>
            <th className="py-3 px-4 text-left">Check-in Date</th>
            <th className="py-3 px-4 text-left">Check-out Date</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">{booking.id}</td>
              <td className="py-3 px-4">{booking.hotelName}</td>
              <td className="py-3 px-4">
                <DatePicker
                  selected={booking.checkIn}
                  onChange={(date) => {
                    const updatedBookings = [...bookings];
                    updatedBookings[index].checkIn = date;
                  }}
                  dateFormat="yyyy-MM-dd"
                  className="p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-3 px-4">
                <DatePicker
                  selected={booking.checkOut}
                  onChange={(date) => {
                    const updatedBookings = [...bookings];
                    updatedBookings[index].checkOut = date;
                  }}
                  dateFormat="yyyy-MM-dd"
                  className="p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-3 px-4">
                <span
                  className={`${
                    booking.status === "Completed" ? "bg-green-500" : "bg-red-500"
                  } text-white px-3 py-1 rounded-full`}
                >
                  {booking.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BookingHistory;
