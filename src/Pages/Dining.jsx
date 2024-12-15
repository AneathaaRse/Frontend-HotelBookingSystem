import React, { useState } from "react";
import dining1 from "../assets/dining1.jpg";
import dining2 from "../assets/dining2.jpg";
import dining3 from "../assets/dining3.jpg";
import dining4 from "../assets/dining4.jpg";
import FacilitiesSection from "./FacilitiesSection"; // Import the FacilitiesSection component

const Dining = () => {
  const [expandedId, setExpandedId] = useState(null);

  const diningOptions = [
    {
      id: 1,
      name: "Gourmet Restaurant",
      description: "Experience fine dining with a wide range of cuisines from around the world.",
      image: dining1,
      moreInfo: "Enjoy dishes prepared by world-renowned chefs, paired with an extensive wine collection.",
    },
    {
      id: 2,
      name: "Poolside Barbecue",
      description: "Enjoy delicious grilled dishes by the pool with a stunning view.",
      image: dining2,
      moreInfo: "Our barbecue features fresh ingredients and is perfect for family or group gatherings.",
    },
    {
      id: 3,
      name: "Sky Lounge",
      description: "Relax with premium cocktails and a panoramic view of the city skyline.",
      image: dining3,
      moreInfo: "Our Sky Lounge offers an exclusive menu and live music on weekends.",
    },
    {
      id: 4,
      name: "Family Cafe",
      description: "A cozy cafe offering freshly brewed coffee and delightful pastries.",
      image: dining4,
      moreInfo: "Try our signature desserts and seasonal specialty drinks.",
    },
  ];

  const handleLearnMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto py-10">
      <FacilitiesSection /> {/* Include the FacilitiesSection first */}

      <h1 className="text-4xl font-bold text-center mb-6">Dining Options</h1>
      <p className="text-center text-gray-600 mb-8">
        Discover a variety of dining experiences at our luxury hotel.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {diningOptions.map((option) => (
          <div key={option.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={option.image}
              alt={option.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{option.name}</h2>
              <p className="text-gray-700 mb-4">{option.description}</p>
              {expandedId === option.id && (
                <p className="text-gray-500 mb-4">{option.moreInfo}</p>
              )}
              <button
                onClick={() => handleLearnMore(option.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-200"
              >
                {expandedId === option.id ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dining;