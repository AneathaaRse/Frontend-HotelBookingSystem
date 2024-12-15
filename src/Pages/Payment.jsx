import React, { useState } from "react";

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Simulate payment submission
    setTimeout(() => {
      setPaymentSuccess(true); // Set payment success to true after a successful submission
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Payment</h2>
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Card Number</label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">CVV</label>
            <input
              type="text"
              placeholder="XXX"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Pay Now
          </button>
        </form>

        {/* Show popup on successful payment */}
        {paymentSuccess && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
            Payment successful! Thank you for your booking.
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;