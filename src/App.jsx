import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ React Router imports
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup'; 
import Otherdetails from './pages/Otherdetails';
import Eligibilitycheck from './pages/Eligibilitycheck';
import Savings from './pages/Savings';
import Appdet from './pages/Appdet';
import Verification from './pages/Verification';
import Review from './pages/Review';






const loanEvents = [
  { name: 'John Mwangi', amount: 5000 },
  { name: 'Mary Wanjiru', amount: 3200 },
  { name: 'Ali Kamau', amount: 8700 },
  { name: 'Jane Njeri', amount: 4500 },
];

export default function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const random = loanEvents[Math.floor(Math.random() * loanEvents.length)];
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      toast.success(`${random.name} received KES ${random.amount.toLocaleString()} at ${time}`, {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 7000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* <h1 className="text-3xl font-bold p-6">INUA CHAPAA - Live Loan Updates</h1> */}

        {/* Render routed pages here */}
        <Routes>
          <Route path="/eligibilitycheck" element={<Eligibilitycheck />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appdet" element={<Appdet />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/savings" element={<Savings />} />

          <Route path="/otherdetails" element={<Otherdetails />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/review" element={<Review />} />

        </Routes>

        {/* Toast Container */}
        <ToastContainer transition={Slide} />
      </div>
    </Router>
  );
}
