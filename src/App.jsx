import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Logout from "./Components/Logout";
import Register from "./Pages/Register";
import Dining from "./Pages/Dining";
import Facilities from "./Pages/FacilitiesSection";
import Payment from "./Pages/Payment";
import BookingForm from "./Pages/BookingForm";
import BookingHistory from "./Pages/BookingHistory";
import FacilitiesAndDining from "./Pages/FacilitiesSectionandDining";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword"; 

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/dining" element={<FacilitiesAndDining />} />
              <Route path="/booking-form" element={<BookingForm />}/>
              <Route path="/booking-history" element={<BookingHistory />}/>
              <Route path="/logout" element={<Logout />} />
              <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Added route for forgot password */}
              
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;