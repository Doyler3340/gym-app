import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Memberships from "./pages/memberships";
import Classes from "./pages/classes";
import ContactUs from "./pages/contactus";
import Auth from "./pages/auth";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
