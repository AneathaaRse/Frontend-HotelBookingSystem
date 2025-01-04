import React, { useState } from "react";
import contactImage from "../assets/contact.jpg"; // Adjust the path if necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for reaching out! We’ll get back to you soon.");
  };

  return (
    <section
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="bg-white bg-opacity-80 p-6 shadow rounded max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded"
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>

          {/* Contact Details */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-4">Reach Us At</h3>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 StayLux Lane, Cityville, Country
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> info@staylux.com
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <h4 className="text-lg font-bold mt-6">Business Hours:</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;