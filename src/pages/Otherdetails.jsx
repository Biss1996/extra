import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Otherdetails.css";
import '../styles/main.css';
import '../styles/shared.css';

const OtherDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const form = document.getElementById("loanForms");
    const pwaInstallPopup = document.getElementById("pwa-install-popup");

    const handleSubmit = (e) => {
      e.preventDefault();

      const education = document.getElementById("education").value;
      const employment = document.getElementById("employment").value;
      const income = document.getElementById("Income").value;
      const refName = document.getElementById("Refname").value;
      const refPhone = document.getElementById("Refphone").value;

      if (!education || !employment || !income || !refName || !refPhone) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      // Store values locally
      localStorage.setItem("educate", education);
      localStorage.setItem("employ", employment);
      localStorage.setItem("idNumber", income);
      localStorage.setItem("loanType", refName);
      localStorage.setItem("country", refPhone);
      localStorage.setItem("visited", "true");

      // Show loading popup
      pwaInstallPopup.style.display = "flex";
      setTimeout(() => {
        pwaInstallPopup.style.display = "none";
        navigate("/eligibilitycheck");
      }, 3000);
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, [navigate]);

  return (
    <>
      <div id="pwa-install-popup" className="pwa-install-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img src="assets/process.gif" alt="Authorization GIF" />
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="left-content">
          <h1>INUA <br />CHAPAA</h1>
          <p>
            Let us help you manage your finances effortlessly.
            Get a loan for business, personal needs, emergencies, or more.
          </p>
        </div>

        <div className="form-wrapper">
          <h1>Find Your Loan Eligibility</h1>
          <h3>We offer loans from Ksh. 2,000 - 50,000 loan to MPESA</h3>

          <form id="loanForms">
            <select id="education" required>
              <option value="" disabled selected>Level of Education</option>
              <option value="Secondary and High School">Secondary and High School</option>
              <option value="Diploma and Certificate">Diploma and Certificate</option>
              <option value="Bachelor Degree">Bachelor Degree</option>
              <option value="Master Degree">Master Degree</option>
              <option value="PHD Degree">PHD Degree</option>
            </select>

            <select id="employment" required>
              <option value="" disabled selected>Employment</option>
              <option value="Student">Student</option>
              <option value="Working">Working</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Others">Others</option>
            </select>

            <select id="Income" required>
              <option value="" disabled selected>Monthly Income</option>
              <option value="0 - 10,000">0 - 10,000</option>
              <option value="10,000 - 25,000">10,000 - 25,000</option>
              <option value="25,000 - 35,000">25,000 - 35,000</option>
              <option value="35,000 - 45,000">35,000 - 45,000</option>
              <option value="50,000 +">50,000 +</option>
            </select>

            <select required>
              <option value="" disabled selected>Loan Purpose</option>
              <option value="Personal Expense">Personal Expense</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Emergency Loan">Emergency Loan</option>
              <option value="Student Loan">Student Loan</option>
            </select>

            <label>
              <span style={{ color: "red" }}>Referee * </span>:
            </label>
            <input id="Refname" placeholder="Names" required />
            <input id="Refphone" placeholder="Phone Number" required />

            <select id="Relationship" required>
              <option value="" disabled selected>Relationship</option>
              <option value="Parent">Parent</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Friend">Friend</option>
              <option value="Others">Others</option>
            </select>

            <button type="submit">Submit Details</button>
          </form>

          <p className="note">No CRB Check. No Guarantors. Disbursed to MPESA. No Paperwork.</p>
          <p className="disclaimer">
            By submitting you confirm that you accept the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2025 Inua Chapaa. All rights reserved. <a href="/">Home</a></p>
      </footer>
    </>
  );
};

export default OtherDetails;
