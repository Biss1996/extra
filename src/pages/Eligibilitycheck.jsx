import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import '../styles/Eligibility.css';

const Eligibilitycheck = () => {
  const [timeLeft, setTimeLeft] = useState(1);
  const [statusText, setStatusText] = useState('Requesting ...');
  const [buttonVisible, setButtonVisible] = useState(false);
  const [gifSrc, setGifSrc] = useState('assets/pro.gif');
  const [eligibilityMessage, setEligibilityMessage] = useState('The system is evaluating your loan eligibility and limit.');
  
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime + 1;

        if (newTime >= 11) {
          clearInterval(timerInterval);
          setStatusText('✔ Approved');
          setButtonVisible(true);
          setEligibilityMessage('Eligibility Successful. You qualify for a loan!');
        } else if (newTime === 5) {
          setStatusText('Contacting server 47% ...');
        } else if (newTime === 7) {
          setStatusText('Contacting server 74% ...');
        } else if (newTime >= 3) {
          setStatusText(`Contacting server ${newTime}0% ...`);
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const nextPage = () => {
     setGifSrc('/assets/process.gif'); // ✅ correct path
  setTimeout(() => {
    navigate('/savings');
  }, 5000);
  };

  return (
  <div className="page-wrapper">
    <div className="left-content">
      <h1>INUA  <br /> CHAPAA</h1>
      <p>
        Let us help you manage your finances effortlessly.
        Get a loan for business, personal needs, emergencies, or more.
      </p>
    </div>
    <div className="container">
      <h1 className="wait-heading">Please wait...</h1>
      <div className="gif-container">
        <img src={gifSrc} alt="Authorization GIF" />
      </div>
      <div className="timer">{statusText}</div>
      <h4 className="eligibility-label">{eligibilityMessage}</h4>
      <div className="buttons">
        {buttonVisible && (
          <button id="continueBtn" onClick={nextPage}>
            Check limit
          </button>
        )}
      </div>
    </div>
  </div>
);
}
export default Eligibilitycheck;