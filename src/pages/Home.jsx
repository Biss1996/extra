import React from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "../styles/Home.css";
import "toastify-js/src/toastify.css";

const users = [
  { name: "Ali Kamau", phone: "0712345123", amount: 8700 },
  { name: "Jane Njeri", phone: "0723456789", amount: 4500 },
  { name: "Samuel Kibet", phone: "0709876543", amount: 6100 },
  { name: "John Mwangi", phone: "0711122233", amount: 5000 },
  { name: "Mary Wanjiru", phone: "0799887766", amount: 3200 },
  { name: "Peter Otieno", phone: "0721123456", amount: 7200 },
  { name: "Lucy Nduta", phone: "0733111222", amount: 5800 },
  { name: "Brian Ochieng", phone: "0711002233", amount: 4500 },
  { name: "Nancy Akinyi", phone: "0700556677", amount: 3300 },
  { name: "David Kiptoo", phone: "0799001122", amount: 8200 },
  { name: "Caroline Wambui", phone: "0744223344", amount: 7600 },
  { name: "Kelvin Mutua", phone: "0711778899", amount: 6200 },
  { name: "Faith Chebet", phone: "0722889900", amount: 4700 },
  { name: "James Kariuki", phone: "0733445566", amount: 3900 },
  { name: "Esther Muthoni", phone: "0700998877", amount: 5500 },
  { name: "Patrick Omondi", phone: "0788111222", amount: 6900 },
  { name: "Janet Auma", phone: "0722777888", amount: 4300 },
  { name: "Joseph Mwenda", phone: "0711445566", amount: 8100 },
  { name: "Angela Nyambura", phone: "0700554433", amount: 5100 },
  { name: "Felix Kiplangat", phone: "0799776655", amount: 4700 },
  { name: "Gloria Atieno", phone: "0744889900", amount: 3600 },
  { name: "Victor Kimani", phone: "0711998877", amount: 7200 },
  { name: "Rose Wairimu", phone: "0722665544", amount: 6800 },
  { name: "Collins Barasa", phone: "0788332211", amount: 5900 },
  { name: "Mercy Naliaka", phone: "0700112233", amount: 4000 },
  { name: "George Kipchoge", phone: "0733998877", amount: 7400 },
  { name: "Diana Njoki", phone: "0711333444", amount: 4800 },
  { name: "Steve Maina", phone: "0722995566", amount: 8300 },
  { name: "Beatrice Moraa", phone: "0744009988", amount: 6100 },
  { name: "Elijah Kariithi", phone: "0799445566", amount: 6700 },
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
    const msg = `${maskTransactionID(txid)} Confirmed ${user.amount} sent to ${user.name} (${maskPhoneNumber(user.phone)}) on ${formatDate(date)} ${formatTime(date)}`;

    Toastify({
  text: msg,
  duration: 10000,
  gravity: "top",
  position: "right",
  style: { background: "#02c122da", color: "#fff" }, // ✅ modern
}).showToast();
}

  React.useEffect(() => {
    const interval = setInterval(showToast, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="section">
  <header>
    <div className="header-content">
      <img src="/chapaa.jpg" alt="INUA CHAPAA Logo" className="logo" />
      <h1>INUA CHAPAA</h1>
      <p>Quick, Safe, and Easy Mobile Loans</p>

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
          marginTop: "20px" 
        }}
      >
        <img
          src="/play1.jpeg"
          alt="Download from Play Store"
          style={{ width: "24px", height: "24px" }}
        />
        Download App
      </button>
    </div>
  </header>

  <section className="section" style={{ textAlign: "center" }}>
    <h2>Need Cash Fast?</h2>
    <p>
      INUA CHAPAA offers instant loans to help you meet your financial needs.
      Whether it’s for emergencies, school fees, or unexpected expenses—we’ve got you covered.
    </p>

    <h2>Why Choose INUA CHAPAA?</h2>
    <div className="benefits">
      <div className="benefit">
        <h3>Fast Approval</h3>
        <p>Loans disbursed to your Mpesa in minutes.</p>
      </div>
      <div className="benefit">
        <h3>Flexible Repayment</h3>
        <p>Repay at your own pace with helpful reminders.</p>
      </div>
      <div className="benefit">
        <h3>No Hidden Fees</h3>
        <p>Transparent terms, no surprises.</p>
      </div>
      <div className="benefit">
        <h3>24/7 Support</h3>
        <p>Need help? Reach us anytime via the app.</p>
      </div>
    </div>

    <h2>What Our Users Say</h2>
    <div className="testimonials">
      <div className="testimonial">
        <p>“INUA CHAPAA helped me pay school fees on time. Lifesaver!”</p>
        <strong>- James M.</strong>
      </div>
      <div className="testimonial">
        <p>“Very convenient. Got money within 10 minutes.”</p>
        <strong>- Wanjiku K.</strong>
      </div>
    </div>

    <h2>Ready to Boost Your Finances?</h2>
    <p>Join thousands who trust INUA CHAPAA for emergency loans.</p>

    <button
      className="cta-button"
      onClick={() => {
        window.gtag?.("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL"
        });
        navigate("/login");
      }}
    >
      Apply Now!
    </button>

    <footer>
      &copy; 2025 INUA CHAPAA. All rights reserved.
    </footer>
  </section>
</div>

  );
};

export default Home;
