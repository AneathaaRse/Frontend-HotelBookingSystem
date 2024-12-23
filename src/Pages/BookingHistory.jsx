const BookingHistory = () => {
<<<<<<< HEAD
  const bookings = JSON.parse(localStorage.getItem('formData'));

  return (
   <>
    <section className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Booking History</h2>
      
      <table className="min-w-full table-auto bg-white border-collapse shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 text-left">Booking ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Address</th>
            <th className="py-3 px-4 text-left">Check-in Date</th>
            <th className="py-3 px-4 text-left">Check-out Date</th>
            <th className="py-3 px-4 text-left">Phone No</th>
            <th className="py-3 px-4 text-left">Room Type</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
        {bookings.map((booking, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="py-3 px-4">{index+1}</td>
            <td className="py-3 px-4">{booking.firstName}</td>
            <td className="py-3 px-4 w-1/6">{booking.address}</td>
            <td className="py-3 px-4">{booking.checkIn}</td>
            <td className="py-3 px-4">{booking.checkOut}</td>
            <td className="py-3 px-4">{booking.phone}</td>
            <td className="py-3 px-4">{booking.roomType}</td>
            <td className="py-3 px-4">
                <span
                  className={`${
                    booking.status === "Completed" ? "bg-green-500" : "bg-red-500"
                  } text-white px-3 py-1 rounded-full`}
                >
                  {booking.status === "Completed" ? "Completed" : "Pending"}
                </span>
              </td>
            
          </tr>
        ))}
        </tbody>
      </table>
    </section> 
   </>  
  );
};

export default BookingHistory;
=======
    const bookings = JSON.parse(localStorage.getItem('formData'));
  
    return (
     <>
      <section className="p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Booking History</h2>
        
        <table className="min-w-full table-auto bg-white border-collapse shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">Booking ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Check-in Date</th>
              <th className="py-3 px-4 text-left">Check-out Date</th>
              <th className="py-3 px-4 text-left">Phone No</th>
              <th className="py-3 px-4 text-left">Room Type</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">{index+1}</td>
              <td className="py-3 px-4">{booking.firstName}</td>
              <td className="py-3 px-4 w-1/6">{booking.address}</td>
              <td className="py-3 px-4">{booking.checkIn}</td>
              <td className="py-3 px-4">{booking.checkOut}</td>
              <td className="py-3 px-4">{booking.phone}</td>
              <td className="py-3 px-4">{booking.roomType}</td>
              <td className="py-3 px-4">
                  <span
                    className={`${
                      booking.status === "Completed" ? "bg-green-500" : "bg-red-500"
                    } text-white px-3 py-1 rounded-full`}
                  >
                    {booking.status === "Completed" ? "Completed" : "Pending"}
                  </span>
                </td>
              
            </tr>
          ))}
          </tbody>
        </table>
      </section> 
     </>  
    );
  };
  
  export default BookingHistory;
>>>>>>> da41852713ed5437e16b9e3b61a329ed940530a8
