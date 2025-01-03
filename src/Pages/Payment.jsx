import React, { useState, useEffect } from "react";
import { useNavigate,useSearchParams } from "react-router-dom";

const PaymentForm = () => {
  const [bookingId, setBookingId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the booking ID from the query parameter
    const id = searchParams.get("id");
    if (id) setBookingId(id);
  }, [searchParams]);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send payment details to backend
      const response = await fetch("http://localhost:5000/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingId,
          cardDetails,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to store payment details.");
      }

      const data = await response.json();

      if (data.success) {
        setPaymentSuccess(true);
        setTimeout(() => {
          navigate("/booking-history"); // Redirect to booking history page
        }, 8000);
      } else {
        setError("Payment failed. Please try again.");
      }
    } catch (err) {
      console.log(err.message);
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Payment</h2>
        {paymentSuccess ? (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
            Payment successful! Thank you for your booking.
          </div>
        ) : (
          <form onSubmit={handlePaymentSubmit}>
            <input type="hidden" value={bookingId} />
            <div className="mb-4">
              <label className="block font-semibold mb-2">Card Number</label>
              <input
                type="text"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Expiry Date</label>
              <input
                type="text"
                value={cardDetails.expiryDate}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiryDate: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">CVV</label>
              <input
                type="text"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
