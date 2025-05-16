import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can collect form data here if needed
    navigate("/otherdetails");
  };

  return (
    <>
      {/* PWA Install Popup */}
      <div id="pwa-install-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img src="assets/process.gif" alt="Authorization GIF" id="gifcontent" />
          </div>
        </div>
      </div>

      {/* Preloader Section */}
      <div className="preloader" id="preloader" style={{ opacity: 0, display: 'none' }}>
        <div className="loader">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
        <div className="preloader-text">Loading, please wait...</div>
      </div>

      <header>
        <nav className="navbar">
          <div className="logo">Zenka Kash</div>
          <ul className="nav-links" id="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <div className="main-container">
        {/* Left Section */}
        <div className="left-content">
          <h1>Zenka <br /> Kash</h1>
          <p>
            Let us help you manage your finances effortlessly.
            Get a loan for business, personal needs, emergencies, or more.
          </p>
        </div>

        {/* Form Section */}
        <div className="form-wrapper">
          <h1>Find Your Loan Eligibility</h1>
          <h3>We offer loans from Ksh. 2,000 - 50,000 loan to MPESA</h3>

          <form id="loanForm" onSubmit={handleSubmit}>
            <input type="text" id="names" placeholder="Your Name" required />
            <select id="country" required>
              <option value="" disabled selected>Select County</option>
              <option value="kenya">Mombasa</option>
              <option value="tanzania">Kwale</option>
              <option value="mozambique">Kilifi</option>
              <option value="drc">Tana River</option>
              <option value="egypt">Nairobi</option>
            </select>
            <input type="tel" id="mpesas" placeholder="MPESA Phone Number" required />
            <input type="text" id="idNumber" placeholder="National ID Number" required />
            <select id="loanType" required>
              <option value="" disabled selected>Select Gender</option>
              <option value="Personal">Female</option>
              <option value="Car">Male</option>
              <option value="Business">Other</option>
            </select>
            <input id="DOB" placeholder="Date of Birth: dd/mm/yy" required />
            <select id="maritalstatus" required>
              <option value="" disabled selected>Marital Status</option>
              <option value="Personal">Single</option>
              <option value="Car">Married</option>
              <option value="Business">Divorced</option>
            </select>
            <button type="submit">Next</button>
          </form>

          <p className="note">
            No CRB Check. No Guarantors. Disbursed to MPESA. No Paperwork.
          </p>
          <p className="disclaimer">
            By submitting you confirm that you accept the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2025 Zenka Kash. All rights reserved. <a href="/">Home</a></p>
      </footer>
    </>
  );
};

export default Signup;
