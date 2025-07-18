import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./App.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import Otherdetails from "./pages/Otherdetails";
import Eligibilitycheck from "./pages/Eligibilitycheck";
import Savings from "./pages/Savings";
import Appdet from "./pages/Appdet";
import Verification from "./pages/Verification";
import Review from "./pages/Review";

const users = [
  { name: "Ali Kamau", phone: "0712345123", amount: 8700 },
  { name: "Jane Njeri", phone: "0723456789", amount: 4500 },
  { name: "Samuel Kibet", phone: "0709876543", amount: 6100 },
  { name: "John Mwangi", phone: "0711122233", amount: 5000 },
  { name: "Faith Wanjiku", phone: "0798456123", amount: 3900 },
  { name: "Brian Otieno", phone: "0741123456", amount: 7200 },
  { name: "Mercy Achieng", phone: "0721987654", amount: 5300 },
  { name: "Elijah Mutua", phone: "0707654321", amount: 4900 },
  { name: "Caroline Wambui", phone: "0715567890", amount: 8000 },
  { name: "Peter Kiprotich", phone: "0754345678", amount: 6700 },
  { name: "Lucy Nyambura", phone: "0790123456", amount: 4300 },
  { name: "Dennis Onyango", phone: "0720345678", amount: 5200 },
  { name: "Beatrice Nduta", phone: "0716765432", amount: 6100 },
  { name: "David Njoroge", phone: "0745012345", amount: 5700 },
  { name: "Sharon Akinyi", phone: "0712340789", amount: 4600 },
  { name: "Kevin Kipkemboi", phone: "0709345678", amount: 7200 },
  { name: "Lilian Wanja", phone: "0722123456", amount: 5100 },
  { name: "George Kariuki", phone: "0733456789", amount: 6000 },
  { name: "Ann Chebet", phone: "0791234567", amount: 5400 },
  { name: "Stephen Njuguna", phone: "0710987654", amount: 5800 },
  { name: "Gladys Mumo", phone: "0720567890", amount: 4900 },
  { name: "Victor Otieno", phone: "0708567123", amount: 6300 },
  { name: "Rose Nyambura", phone: "0734345678", amount: 4800 },
  { name: "Collins Musyoka", phone: "0718098765", amount: 7500 },
  { name: "Diana Atieno", phone: "0746123456", amount: 5500 },
  { name: "Irene Wairimu", phone: "0721678901", amount: 4600 },
  { name: "Tom Muriuki", phone: "0708765432", amount: 6900 },
  { name: "Purity Nduta", phone: "0719456123", amount: 5800 },
  { name: "Fredrick Omondi", phone: "0734567890", amount: 4300 },
  { name: "Nancy Wambua", phone: "0798765123", amount: 5100 },
  { name: "Chris Kiplagat", phone: "0743345678", amount: 7200 },
  { name: "Esther Achieng", phone: "0701345678", amount: 6100 },
  { name: "Anthony Mwenda", phone: "0728432190", amount: 4900 },
  { name: "Janet Chebet", phone: "0750123987", amount: 5300 },
  { name: "Eric Muthoni", phone: "0718675432", amount: 4700 },
  { name: "Phyllis Nyawira", phone: "0723345987", amount: 5900 },
  { name: "Daniel Kiptoo", phone: "0793456781", amount: 5000 },
  { name: "Winnie Njoki", phone: "0732765432", amount: 4800 },
  { name: "James Ndege", phone: "0741123908", amount: 6600 },
  { name: "Millicent Moraa", phone: "0729876543", amount: 5400 },
  { name: "Felix Ouma", phone: "0713298756", amount: 6200 },
  { name: "Joan Njeri", phone: "0708567341", amount: 5700 },
  { name: "Patrick Wekesa", phone: "0743876120", amount: 4900 },
  { name: "Naomi Auma", phone: "0792856347", amount: 5100 },
  { name: "Kennedy Barasa", phone: "0709987654", amount: 6800 }
];



const generateTransactionID = () =>
  "TEF" + Math.floor(1000 + Math.random() * 9000);
const maskTransactionID = (txid) => txid.slice(0, 3) + "****";
const maskPhoneNumber = (phone) =>
  phone.slice(0, 2) + "** ***" + phone.slice(7);
const formatDate = (date) =>
  `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
};

const showToast = () => {
  const user = users[Math.floor(Math.random() * users.length)];
  const date = new Date(new Date().getTime() - 12 * 41 * 1000);

  const txid = generateTransactionID();
  const msg = `${maskTransactionID(txid)} Confirmed ${user.amount} sent to ${user.name} (${maskPhoneNumber(user.phone)}) on ${formatDate(date)} ${formatTime(date)}`;

  Toastify({
    text: msg,
    duration: 7000,
    gravity: "top",
    position: "right",
    style: {
      background: "#013e0be0",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "500",
      padding: "14px 18px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      maxWidth: "90vw",   // Prevent overflow on small screens
      wordBreak: "break-word",
      zIndex: 9999,}
  }).showToast();
};

document.addEventListener("DOMContentLoaded", () => {
  showToast();
});


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/signup" element={<Signup showToast={showToast} />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/appdet" element={<Appdet />} />
          <Route path="/eligibilitycheck" element={<Eligibilitycheck />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/otherdetails" element={<Otherdetails />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}
