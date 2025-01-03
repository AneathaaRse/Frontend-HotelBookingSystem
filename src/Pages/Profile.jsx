import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  // State to manage form data and validation
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming the user is authenticated, replace the URL with the actual API endpoint
        const response = await fetch("http://localhost:5000/api/users/profile/"+userId, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Add token if needed
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to load user data.");
        }

        const data = await response.json();
        setUserData(data); // Set the user data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
        setApiError(error.message); // Set API error if fetching fails
      }
    };

    fetchUserData();
  }, []);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (userData.name && !userData.name.trim()) newErrors.name = "Name is required.";
    if (userData.email && !userData.email.trim()) newErrors.email = "Email is required.";
    return newErrors;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission (update user profile)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Show validation errors
    } else {
      setErrors({});
      setApiError(null); // Clear any previous API errors

      try {
        // Assuming you have an endpoint to update user details
        const response = await fetch("http://localhost:5000/api/users/update-profile/"+userId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to update profile.");
        }

        const data = await response.json();
        console.log("Profile updated successfully:", data);
        // Optionally show success message, or redirect
        navigate("/profile/"+userId); // Navigate to profile page after success
      } catch (error) {
        console.error("Error updating profile:", error);
        setApiError(error.message); // Show API error
      }
    }
  };

  // Handle close action (close or redirect from the page)
  const handleClose = () => {
    navigate("/profile/"+userId); // Redirect to profile page or previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Profile Details</h2>
        {apiError && <p className="text-red-500 text-center mb-4">{apiError}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 focus:outline-none"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-600 focus:outline-none"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
