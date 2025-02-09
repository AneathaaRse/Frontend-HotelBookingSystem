import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://backend-hotelbookingsystem-5.onrender.com/api/hotels/history");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (Array.isArray(result.bookings)) {
          setBookings(result.bookings);
        } else {
          console.error("Expected an array but received:", result);
          setError("Invalid data format received from server.");
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError("Failed to fetch booking history.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit booking ID: ${id}`);
  };

  const handlePayment = (id) => {
    navigate(`/payment?id=${id}`); // Redirect with booking ID as a query parameter
  };

  const handleDelete = async (id) => {
    console.log(`Delete booking ID: ${id}`);
    try {
      const response = await fetch(`https://backend-hotelbookingsystem-5.onrender.com/api/hotels/cancel/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete booking.");
      }
      setBookings(bookings.filter((booking) => booking.bookingId !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const toggleMenu = (index) => {
    setShowMenu((prev) => (prev === index ? null : index));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <section className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Booking History
      </h2>

      <table className="w-full bg-white border-collapse shadow-md table-auto">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-2 text-left">Booking ID</th>
            <th className="py-3 px-2 text-left">Name</th>
            <th className="py-3 px-2 text-left">Email</th>
            <th className="py-3 px-2 text-left">Check-in Date</th>
            <th className="py-3 px-2 text-left">Check-out Date</th>
            <th className="py-3 px-2 text-left">Phone No</th>
            <th className="py-3 px-2 text-left">Room Type</th>
            <th className="py-3 px-2 text-left">Status</th>
            <th className="py-3 px-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="py-3 px-2">{index + 1}</td>
              <td className="py-3 px-2">{booking.user?.name || "N/A"}</td>
              <td className="py-3 px-2">{booking.user?.email || "N/A"}</td>
              <td className="py-3 px-2">{booking.checkInDate || "N/A"}</td>
              <td className="py-3 px-2">{booking.checkOutDate || "N/A"}</td>
              <td className="py-3 px-2">{booking.phone || "N/A"}</td>
              <td className="py-3 px-2">{booking.roomType || "N/A"}</td>
              <td className="py-3 px-2">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    booking.status === "Confirmed" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {booking.status === "Confirmed" ? "Confirmed" : "Pending"}
                </span>
              </td>
              <td className="py-3 px-2 relative">
                <button
                  onClick={() => toggleMenu(index)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ...
                </button>
                {showMenu === index && (
                  <div className="absolute bg-white shadow-md rounded-lg mt-2 z-10">
                    <button
                      onClick={() => handleEdit(booking.bookingId)}
                      className="block px-4 py-2 text-left text-sm hover:bg-gray-100 w-full"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handlePayment(booking.bookingId)}
                      className="block px-4 py-2 text-left text-sm hover:bg-gray-100 w-full"
                    >
                      Payment
                    </button>
                    <button
                      onClick={() => handleDelete(booking.bookingId)}
                      className="block px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 w-full"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BookingHistory;
