import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    }, 7000); // Every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Your current layout/header/sections here */}

      {/* Toast Container */}
      <ToastContainer transition={Slide} />
    </div>
  );
}