import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Savings.css";
import { Helmet } from "react-helmet-async";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

const Savings = ({ showToast }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("John Doe");
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const [plans, setPlans] = useState([]);

   useEffect(() => {
      const interval = setInterval(showToast, 9000);
      return () => clearInterval(interval); // clean up on unmount
    }, [showToast]);

  useEffect(() => {
    const stored = localStorage.getItem("name");
    if (stored) setName(stored);

    const getRandom = (min, max) => {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      return rand - (rand % 10);
    };

    const savingsPlans = [
      { savings: 170, limit: getRandom(2500, 3500) },
      { savings: 200, limit: getRandom(4000, 5000) },
      { savings: 250, limit: getRandom(6000, 7000) },
      { savings: 300, limit: getRandom(7000, 10000) },
      { savings: 450, limit: getRandom(10000, 14000) },
      { savings: 950, limit: getRandom(14000, 19000) },
      { savings: 1550, limit: getRandom(20000, 25000) },
    ];
    setPlans(savingsPlans);
  }, []);

  const handleSelect = (plan) => {
    setSelected(plan);
    setError(plan.savings === 1550); // Error if highest tier selected
  };

  const handleProceed = () => {
    if (selected && !error) {
      localStorage.setItem("limit", selected.limit);
      navigate("/appdet");
    }
  };

  const fname = name.split(" ")[0];

  return (
    <div className="container">
      <h1>OKOA EXTRA</h1>
      <p className="subtitle">
        Dear <strong className="highlighted">{fname},</strong> you qualify for a
        loan of up to <strong>Ksh 12,500</strong>. Choose your savings plan to
        continue to loan application.
      </p>

      <div className="radio-group">
        {plans.map((plan) => (
          <label
            key={plan.savings}
            className={`radio-option ${selected?.savings === plan.savings ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="savings"
              value={plan.savings}
              onChange={() => handleSelect(plan)}
            />
            <div className="savings-amount">Ksh {plan.savings}</div>
            <div className="loan-limit">Loan limit: Ksh {plan.limit}</div>
          </label>
        ))}
      </div>

      <div className={`result ${error ? "error" : ""}`}>
        {selected
          ? error
            ? "Only existing members allowed"
            : `Your loan limit: Ksh ${selected.limit}`
          : "Select a savings amount to see your loan limit"}
      </div>

      <div className="buttons">
        <button
          id="continueBtn"
          onClick={handleProceed}
          disabled={!selected || error}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Savings;
