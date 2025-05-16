import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/App.css";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Eligibilitycheck from './pages/Eligibilitycheck';
import Home from './pages/Home';
import LoanEligibility from './pages/LoanEligibility';
import Otherdetails from './pages/Otherdetails';
import Savings from './pages/Savings';
import Verification from './pages/Verification';
import Appdet from './pages/Appdet';
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

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/review" element={<Review />} />

          <Route path="/savings" element={<Savings />} />
          <Route path="/verification" element={<Verification />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/eligibilitycheck" element={<Eligibilitycheck />} />
          <Route path="/" element={<Home />} />
          <Route path="/loanEligibility" element={<LoanEligibility />} />
          <Route path="/otherdetails" element={<Otherdetails />} />
          <Route path="/appdet" element={<Appdet />} />




        </Routes>
        <ToastContainer transition={Slide} />
      </div>
    </Router>
  );
}
