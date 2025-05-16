import React from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "../styles/Home.css";
import "toastify-js/src/toastify.css";

const users = [
  { name: "Ali Kamau", phone: "0712345123", amount: 8700 },
  { name: "Jane Njeri", phone: "0723456789", amount: 4500 },
  { name: "Samuel Otieno", phone: "0709876543", amount: 6100 },
  // ... Add all users as needed
];

const generateTransactionID = () => "TEF" + Math.floor(1000 + Math.random() * 9000);
const maskTransactionID = (txid) => txid.slice(0, 3) + "****";
const maskPhoneNumber = (phone) => phone.slice(0, 2) + "** ***" + phone.slice(7);
const formatDate = (date) => `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
};

const Home = () => {
  const navigate = useNavigate();

  const showToast = () => {
    const user = users[Math.floor(Math.random() * users.length)];
    const date = new Date();
    const txid = generateTransactionID();
    const msg = `${user.name} (${maskPhoneNumber(user.phone)}) received Ksh ${user.amount} | TxID: ${maskTransactionID(txid)} | ${formatDate(date)} ${formatTime(date)}`;

    Toastify({
  text: msg,
  duration: 4000,
  gravity: "top",
  position: "right",
  style: { background: "#02c122da", color: "#fff" }, // ✅ modern
}).showToast();
}

  React.useEffect(() => {
    const interval = setInterval(showToast, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <header>
        <div className="header-content">
          <img src="/chapaa.jpg" alt="INUA CHAPAA Logo" className="logo" />
          <h1>INUA CHAPAA</h1>
          <p>Quick, Safe, and Easy Mobile Loans</p>
        </div>
        {/* Changed from <a> to <button> for routing */}
        <button
  onClick={() => navigate("/login")}
  className="cta-button"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#00a651",
    padding: "10px 20px",
    border: "none",
    borderRadius: "30px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    flexWrap: "wrap"
  }}
>
  <img
    src="/playlogo.svg"
    alt="Play Store"
    style={{ width: "24px", height: "24px" }}
  />
  Download App
</button>

      </header>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>Need Cash Fast?</h2>
        <p>
          INUA CHAPAA offers instant loans to help you meet your financial needs.
          Whether it's for emergencies, school fees, or unexpected expenses, we've got you covered.
        </p>
        <h2>Why Choose INUA CHAPAA?</h2>

        <div className="benefits">
          <div className="benefit">
            <h3>Fast Approval</h3>
            <p>Get loans disbursed to your mobile money in minutes.</p>
          </div>
          <div className="benefit">
            <h3>Flexible Repayment</h3>
            <p>Enjoy multiple repayment options with reminders.</p>
          </div>
          <div className="benefit">
            <h3>No Hidden Fees</h3>
            <p>Transparent loan terms with no surprise charges.</p>
          </div>
          <div className="benefit">
            <h3>24/7 Support</h3>
            <p>Reach out to our support team anytime via the app.</p>
          </div>
        </div>

        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"INUA CHAPAA helped me pay school fees on time. Lifesaver!"</p>
            <strong>- James M.</strong>
          </div>
          <div className="testimonial">
            <p>"Very convenient. Got money within 10 minutes."</p>
            <strong>- Wanjiku K.</strong>
          </div>
        </div>

        <h2>Ready to Boost Your Finances?</h2>
        <p>Join thousands of users who trust INUA CHAPAA for emergency and instant loans.</p>
        <button
          className="cta-button"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>

        <footer>
          &copy; 2025 INUA CHAPAA. All rights reserved.
        </footer>
      </section>
    </div>
  );
};

export default Home;
