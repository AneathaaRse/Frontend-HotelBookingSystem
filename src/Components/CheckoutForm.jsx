import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) return; // Stripe.js has not yet loaded

    setProcessing(true);

    // Get the CardElement (card input)
    const card = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message); // Show error to the user
      setProcessing(false);
    } else {
      // Proceed with your backend to complete the payment process.
      // Here, you can call your backend to handle the payment confirmation process.
      // For now, we are just simulating success.

      // Simulate a successful payment
      setProcessing(false);
      alert("Payment Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Card Element */}
      <div className="my-4">
        <CardElement />
      </div>

      {/* Display error messages */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={processing}
        className="w-full px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
      >
        {processing ? "Processing..." : "Complete Payment"}
      </button>
    </form>
  );
};

export default CheckoutForm;