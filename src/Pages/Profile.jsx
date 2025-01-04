import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setApiError("Invalid user ID.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/profile/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to load user data.");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setApiError("Unable to fetch user data. Please try again.");
      }
    };

    fetchUserData();
  }, [userId]);

  const validateForm = () => {
    const newErrors = {};
    if (!userData.name.trim()) newErrors.name = "Name is required.";
    if (!userData.email.trim()) newErrors.email = "Email is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users/update-profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile.");
      }

      navigate(`/profile/${userId}`);
    } catch (error) {
      console.error("Error updating profile:", error);
      setApiError("Failed to update profile. Please try again.");
    }
  };

  if (apiError) {
    return <div className="text-red-500 text-center">{apiError}</div>;
  }

  if (!userData.name && !userData.email) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Profile Details</h2>
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
              onClick={() => navigate(`/profile/${userId}`)}
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
