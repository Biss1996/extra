import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Appdet.css';




const Appdet = () => {
  const navigate = useNavigate();

  // State for amounts and fees
  const [limit, setLimit] = useState(0);
  const [fee, setFee] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [receivable, setReceivable] = useState(0);
  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState();




  useEffect(() => {
    // Get limit from localStorage or default to 0
    const stored = localStorage.getItem('name');
    if (stored) setName(stored);

    const storedPhone = localStorage.getItem('phone');
if (storedPhone) setPhone(storedPhone);
    let lims = parseFloat(localStorage.getItem('limit')) || 0;
    setLimit(lims);

    // Determine fee and saving amount based on limit
    let f = 0, s = 0;
    if (lims >= 20000) {
      f = 522;
      s = 950;
    } else if (lims >= 10000) {
      f = 322;
      s = 450;
    } else if (lims >= 7000) {
      f = 292;
      s = 300;
    } else if (lims >= 6000) {
      f = 248;
      s = 220;
    } else if (lims >= 4000) {
      f = 198;
      s = 170;
    } else if (lims <= 3500) {
      f = 156;
      s = 120;
    }
    setFee(f);
    setSavingAmount(s);
    localStorage.setItem('saveamount', s);

    const interestR = lims * 0.08;
    setInterest(interestR);

    const receiveableAmount = lims - (interestR + f);
    setReceivable(receiveableAmount);
  }, []);

  const goToVerification = () => {
    navigate('/Verification');
    
  };

  return (
    <div className="appdet-container">
      <div className="loan-message">
        <h1>Eligibility Successful. You Qualify for a Loan.</h1>
        <h2>Early settlement may result in reduction of interest.</h2>
        <h3>Loan Amount Qualified</h3>
        <h4 id="limit">Ksh {limit.toFixed(2)}</h4>
        <h5>
          Term <span style={{ marginLeft: '50%' }}> Receive Amount</span>
        </h5>
        <h4>
          14 days <span style={{ marginLeft: '45%' }}>Ksh {receivable.toFixed(2)}</span>
        </h4>
      </div>

      <div className="loan-table">
        <div>
          <div className="labels">Awarded Loan Amount :</div>
          <div className="labels" id="limit1"><strong>Ksh {limit.toFixed(2)}</strong></div>
        </div>
        <div>
          <div className="labels">Service Fee :</div>
          <div className="labels" id="Servicefee"><strong>Ksh {fee.toFixed(2)}</strong></div>
        </div>
        <div>
          <div className="labels">Interest Rate :</div>
          <div className="labels"><strong>8%</strong></div>
        </div>
        <div>
          <div className="labels">Interest Applied (8%) :</div>
          <div className="labels" id="interestrate"><strong>Ksh {interest.toFixed(2)}</strong></div>
        </div>
        <div>
          <div className="labels">Disburseable Amount to Mpesa :</div>
          <div className="labels" id="received1"><strong>Ksh {receivable.toFixed(2)}</strong></div>
        </div>
      </div>

      <div className="loan-tabless">
        <div>
          <div className="labels"><span style={{ marginLeft: '30%' }}><strong>Mpesa Account</strong></span></div>
        </div>
        <div>
          <div className="labels" id="phonenumber"></div>
          
        </div>
        <div>
          <div className="labels">NAME: <strong>{name}</strong></div>
        </div>
        
        <div>
          <div className="labels">M-PESA NO :<strong>{phone}</strong></div>

        </div>

        <button className="verify-button" onClick={goToVerification}>
          Apply Now
        </button>
      </div>

      <div className="footer">© Inua Chapaa 2025</div>
    </div>
  );
};

export default Appdet;
