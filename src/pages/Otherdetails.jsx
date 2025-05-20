import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Otherdetails.css";
import '../styles/main.css';
import '../styles/shared.css';

const LoadingPopup = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div id="pwa-install-popup" className="pwa-install-popup">
      <div className="pwa-popup-content">
        <div className="gif-container">
          <img src="assets/load.gif" alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

const OtherDetails = () => {
  const navigate = useNavigate();

  // State for form data
  const [education, setEducation] = useState("");
  const [employment, setEmployment] = useState("");
  const [income, setIncome] = useState("");
  const [refName, setRefName] = useState("");
  const [refPhone, setRefPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!education) errors.education = "Education level is required";
    if (!employment) errors.employment = "Employment status is required";
    if (!income) errors.income = "Income range is required";
    if (!refName) errors.refName = "Referee name is required";
    if (!refPhone) errors.refPhone = "Referee phone number is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset errors if validation passes
    setFormErrors({});

    // Store values in localStorage
    localStorage.setItem("educate", education);
    localStorage.setItem("employ", employment);
    localStorage.setItem("idNumber", income);
    localStorage.setItem("loanType", refName);
    localStorage.setItem("country", refPhone);
    localStorage.setItem("visited", "true");

    // Show loading popup
    setLoading(true);
    setIsSubmitting(true);

    // Simulate a loading delay, then navigate
    setTimeout(() => {
      setLoading(false);
      setIsSubmitting(false);
      navigate("/eligibilitycheck");
    }, 3000);
  };

  return (
    <>
      <LoadingPopup isVisible={loading} />

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

          <form id="loanForms" onSubmit={handleSubmit}>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
            >
              <option value="" disabled>
                Level of Education
              </option>
              <option value="Secondary and High School">Secondary and High School</option>
              <option value="Diploma and Certificate">Diploma and Certificate</option>
              <option value="Bachelor Degree">Bachelor Degree</option>
              <option value="Master Degree">Master Degree</option>
              <option value="PHD Degree">PHD Degree</option>
            </select>
            {formErrors.education && <div className="error">{formErrors.education}</div>}

            <select
              id="employment"
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
              required
            >
              <option value="" disabled>
                Employment
              </option>
              <option value="Student">Student</option>
              <option value="Working">Working</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Others">Others</option>
            </select>
            {formErrors.employment && <div className="error">{formErrors.employment}</div>}

            <select
              id="Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              required
            >
              <option value="" disabled>
                Monthly Income
              </option>
              <option value="0 - 10,000">0 - 10,000</option>
              <option value="10,000 - 25,000">10,000 - 25,000</option>
              <option value="25,000 - 35,000">25,000 - 35,000</option>
              <option value="35,000 - 45,000">35,000 - 45,000</option>
              <option value="50,000 +">50,000 +</option>
            </select>
            {formErrors.income && <div className="error">{formErrors.income}</div>}

            <select required>
              <option value="" disabled>
                Loan Purpose
              </option>
              <option value="Personal Expense">Personal Expense</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Emergency Loan">Emergency Loan</option>
              <option value="Student Loan">Student Loan</option>
            </select>

            <label>
              <span style={{ color: "red" }}>Referee * </span>:
            </label>
            <input
              id="Refname"
              placeholder="Names"
              value={refName}
              onChange={(e) => setRefName(e.target.value)}
              required
            />
            {formErrors.refName && <div className="error">{formErrors.refName}</div>}

            <input
              id="Refphone"
              placeholder="Phone Number"
              value={refPhone}
              onChange={(e) => setRefPhone(e.target.value)}
              required
            />
            {formErrors.refPhone && <div className="error">{formErrors.refPhone}</div>}

            <select id="Relationship" required>
              <option value="" disabled>
                Relationship
              </option>
              <option value="Parent">Parent</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Friend">Friend</option>
              <option value="Others">Others</option>
            </select>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Details"}
            </button>
          </form>

          <p className="note">
            No CRB Check. No Guarantors. Disbursed to MPESA. No Paperwork.
          </p>
          <p className="disclaimer">
            By submitting you confirm that you accept the{" "}
            <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>
          © 2025 Inua Chapaa. All rights reserved. <a href="/">Home</a>
        </p>
      </footer>
    </>
  );
};

export default OtherDetails;
