import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchDoctor from "./pages/SearchDoctor";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetails from './pages/DoctorDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* navbar*/}
      <Navbar />
      
      {/* محتوای اصلی سایت */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-doctor" element={<SearchDoctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
        </Routes>
      </div>
      
      {/* footer*/}
      <Footer />
    </Router>
  );
};

export default App;
