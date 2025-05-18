import React, { useState, useEffect } from 'react';
import '../styles/Verification.css';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const [limit, setLimit] = useState(7000);
  const [savingAmount, setSavingAmount] = useState(160);
  const [messageVisible, setMessageVisible] = useState(false);
  const [mpesaMessage, setMpesaMessage] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [verificationClass, setVerificationClass] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedLimit = parseFloat(localStorage.getItem('limit'));
    const storedSaveAmount = parseFloat(localStorage.getItem('saveamount'));
    if (!isNaN(storedLimit)) setLimit(storedLimit);
    if (!isNaN(storedSaveAmount)) setSavingAmount(storedSaveAmount);
  }, []);

  const copyTillNumber = () => {
    navigator.clipboard.writeText('5297501');
    alert('Till number copied!');
  };

  const openModal = () => setMessageVisible(true);
  const closeModal = () => {
    setMessageVisible(false);
    setMpesaMessage('');
    setVerificationMessage('');
    setVerificationClass('');
  };

  const verifyTransaction = () => {
    if (mpesaMessage.trim().length > 10) {
      setVerificationMessage('Payment verified successfully!');
      setVerificationClass('success');
      navigate('/review');
    } else {
      setVerificationMessage('Invalid M-PESA confirmation message.');
      setVerificationClass('error');
    }
  };

  const goToSavingsPlan = () => {
    window.location.href = 'savings';
  };

  return (
    <>
      <h3>.</h3>
      <div className="container">
      <div className="loan-messages">
        <h4
          id="scrollmsg"
          style={{
            background: 'linear-gradient(135deg, rgb(255, 255, 255), white)',
            color: '#070930',
          }}
        >
          🔊 0724***689 loaned KES 8,390... 2 mins ago
        </h4>
      </div>
      <div className="loan-message">
        <h1 style={{ color: 'greenyellow' }}>ACCOUNT SAVINGS</h1>
        <h5 style={{ color: 'rgb(253, 252, 252)' }}>
          Based on your selected loan amount of{' '}
          <strong id="limit">Ksh {limit.toLocaleString()}</strong>, ELITE URBAN
          SERVICES requires you to save{' '}
          <strong id="savingsamount">Ksh {savingAmount.toLocaleString()}</strong>{' '}
          (Selected Savings Plan) to your Inua Chapaa account. This helps
          strengthen your credit profile. Your savings will be withdrawable
          exclusively upon successful completion of your first loan repayment
          cycle.
        </h5>
      </div>
      <div className="labels">
        <button
          className="verify-btnn"
          onClick={goToSavingsPlan}
          style={{
            marginTop: '5%',
            color: 'orangered',
            background: 'linear-gradient(135deg, #31463f, #070930)',
            fontSize: 'medium',
          }}
        >
          Change Savings Plan
        </button>
      </div>
      <div className="loan-tabless">
        <div>
          <div className="labels">
            <span style={{ marginLeft: '5%' }}>
              <strong>How to save to your INUA CHAPAA A/C:</strong>
            </span>
          </div>
        </div>
        <div>
          <div className="labels">
            Go to M~Pesa :{' '}
            <span style={{ marginLeft: '5.5%' }}>
              <strong>M~pesa</strong>
            </span>
          </div>
        </div>
        <div>
          <div className="labels">
            Lipa na M~Pesa :{' '}
            <span style={{ marginLeft: '3%' }}>
              <strong>Buy Goods & Services</strong>
            </span>
          </div>
        </div>
        <div>
          <div className="labels">
            <strong>Till Number</strong>: {' '}
            <span style={{ marginLeft: '0%' }}>
              <strong>5622370</strong>
      
            </span>
          </div>
          <div className="labels">
            
            <span style={{ marginLeft: '2%' }}>
              <strong>GADGETCOM Ventures</strong>
      
            </span>
          </div>
        </div>
        <div>
          <div className="labels">
            <button className="verify-btnn" onClick={copyTillNumber} id="copytill">
              CLICK TO COPY TILL
            </button>
          </div>
        </div>
        <div>
          <div className="labels">
            Enter Amount :{' '}
            <span style={{ marginLeft: '13%' }}>
              <strong id="savingsamountt">Ksh {savingAmount.toLocaleString()}</strong>
            </span>
          </div>
        </div>
        <div>
          <div className="labels">
            Complete Payment :{' '}
            <span style={{ marginLeft: '3%' }}>
              <strong>Enter M~Pesa Pin</strong>
            </span>
          </div>
        </div>

        <button className="open-modal-btn" onClick={openModal}>
          Verify Payment to Initiate Loan Disbursement
        </button>
      </div>

      <div className={`overlay ${messageVisible ? 'show' : ''}`}>
        <div className="modal">
          {/* <button className="close-btn" onClick={closeModal}>
            &times;
          </button> */}
          <h2>Verify Payments</h2>
          <p>
            Copy the entire confirmation message you received from M-PESA after
            making payments and paste in the text field below then click verify
            button
          </p>

          <textarea
            className="input-field"
            placeholder="Paste M-PESA Message Here"
            rows="4"
            value={mpesaMessage}
            onChange={(e) => setMpesaMessage(e.target.value)}
          />

          <button className="verify-btn" onClick={verifyTransaction}>
            VERIFY
          </button>

          {verificationMessage && (
            <div className={`message ${verificationClass}`}>{verificationMessage}</div>
          )}
        </div>
      </div>

      <div className="footer">© Inua Chapaa 2025</div>
      </div>
    </>
  );
};

export default Verification;