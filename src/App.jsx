import React from 'react'
import Navbar from "./components/Navbar";
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="bg-[#0b1023] min-h-screen text-white">
      <Navbar />
      <Routes>
               <Route path="/about" element={<div className="p-10"><About/></div>} />

      </Routes>
      <LandingPage />
    </div>
  );
}

export default App;
