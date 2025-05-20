import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
// ✅ REMOVE Toastify import

const Home = ({ showToast }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(showToast, 15000);
    return () => clearInterval(interval);
  }, [showToast]);

  return (
   <div className="section">
  <header>
    <div className="header-content">
      <img src="/chapaa.jpg" alt="INUA CHAPAA Logo" className="logo" />
      <h2>INUA CHAPAA</h2>
      <p>Quick, Safe, and Easy Mobile Loans</p>

      <button
        onClick={() => navigate("/signup")}
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
        navigate("/signup");
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
