import React from "react";
import swimmingPoolImage from "../assets/swimmingpool.jpg";
import spaImage from "../assets/spa.jpg";
import gymImage from "../assets/gym.jpg";
import breakfastImage from "../assets/breakfast.jpg";
import meetinghallImage from "../assets/meetinghall.jpg";
import partyhallImage from "../assets/partyhall.jpg";

const FacilitiesSection = () => {
    const facilities = [
        {
          image: swimmingPoolImage,
          title: "Swimming Pool",
          description: `
            Relax and unwind in our luxurious swimming pool.
          `,
        },
        {
          image: spaImage,
          title: "Spa",
          description: `
            Rejuvenate your body and mind at our world-class spa.
            
          `,
        },
        {
          image: gymImage,
          title: "Gym",
          description: `
            Stay fit and active in our state-of-the-art gym.
          `,
        },
        {
            image:breakfastImage, 
            title: "Complimentary Breakfast",
            description: `
              Start your day with a hearty breakfast on us.`,
          },
          {
            image: meetinghallImage, 
            title: "Meeting Hall",
            description: `
              Host your events in our fully equipped meeting hall.
            
            `,
          },
          {
            image: partyhallImage,
            title: "Party Hall",
            description: `
              Celebrate your special moments in our vibrant party hall.
            `,
          },
        
        
      ];
      

  const FacilityCard = ({ image, title, description }) => {
    return (
      <div className="p-4 border rounded shadow-md bg-white">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">Our Facilities</h2>
      <p className="text-center mt-2 text-gray-600">Explore the amazing facilities we offer.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            image={facility.image}
            title={facility.title}
            description={facility.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;