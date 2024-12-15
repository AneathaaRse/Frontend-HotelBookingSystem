import React, { useState } from 'react';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import room4 from '../assets/room4.png';
import room5 from '../assets/room5.png';
import room6 from '../assets/room6.png';
import room7 from '../assets/room7.png';
import room8 from '../assets/room8.png';
import room9 from '../assets/room9.png';
import room10 from '../assets/room10.png';
import room11 from '../assets/room11.png';
import room12 from '../assets/room12.jpg';
import seaview1 from '../assets/seaview-1.jpg';
import seaview2 from '../assets/seaview-2.jpg';
import seaview3 from '../assets/seaview-3.jpg';
import seaview4 from '../assets/seaview-4.jpg';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const standardRooms = [
    { id: 1, name: "Creamy Comfort", price: "$100/night", type: "Non-Deluxe", image: room1 },
    { id: 2, name: "Modern Minimalist Bedroom", price: "$120/night", type: "Deluxe", image: room2 },
    { id: 3, name: "Luxurious Slumber", price: "$130/night", type: "Suite Room", image: room3 },
    { id: 4, name: "Cozy Chic Bedroom", price: "$150/night", type: "Deluxe", image: room4 },
    { id: 5, name: "Serene Slumber", price: "$160/night", type: "Non-Deluxe", image: room5 },
    { id: 6, name: "Tranquil Haven", price: "$180/night", type: "Suite Room", image: room6 },
    { id: 7, name: "Modern Retreat", price: "$200/night", type: "Deluxe", image: room7 },
    { id: 8, name: "Vista Venue", price: "$220/night", type: "Single Room", image: room8 },
    { id: 9, name: "Nature Nook", price: "$250/night", type: "Non-Deluxe", image: room9 },
    { id: 10, name: "Radiant Retreat", price: "$300/night", type: "Suite Room", image: room10 },
    { id: 11, name: "Whimsical Oasis", price: "$350/night", type: "Deluxe", image: room11 },
    { id: 12, name: "Pannel" , price: "$450/night", type: "Suite", image: room12}
  ];

  const seaViewRooms = [
    { id: 1, name: "Poolside Paradise", price: "$200/night", type: "Suite Room", image: seaview1 },
    { id: 2, name: "Pool Thatch", price: "$220/night", type: "Deluxe", image: seaview2 },
    { id: 3, name: "Tranquil Oasis Escape", price: "$240/night", type: "Non-Deluxe", image: seaview3 },
    { id: 4, name: "Zanzibar Serenity", price: "$260/night", type: "Suite Room", image: seaview4 },
  ];

  const renderRoomCards = (rooms) =>
    rooms.map((room) => (
      <div
        key={room.id}
        className="border rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
        onClick={() => setSelectedRoom(room)}
      >
        <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{room.name}</h3>
          <p className="text-gray-700">{room.price}</p>
        </div>
      </div>
    ));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Rooms</h1>

      {/* Standard Rooms Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Standard Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {renderRoomCards(standardRooms)}
        </div>
      </div>

      {/* Sea View Rooms Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Sea View Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderRoomCards(seaViewRooms)}
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-2xl font-bold mt-4">{selectedRoom.name}</h3>
            <p className="text-lg text-gray-700">{selectedRoom.price}</p>
            <p className="text-md text-gray-600">Type: {selectedRoom.type}</p>
            <button
              onClick={() => setSelectedRoom(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;