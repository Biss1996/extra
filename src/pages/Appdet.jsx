import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Appdet.css';
import { Helmet } from "react-helmet-async";

<Helmet>
  {/* Primary SEO */}
  <title>OKOA EXTRA - Instant Mpesa Loans in Kenya</title>
  <meta name="description" content="Need fast cash? OKOA EXTRA offers instant mobile loans sent to your Mpesa account. Quick, safe, and hassle-free." />
  <meta name="keywords" content="Mpesa loan, instant loan Kenya, mobile loan app, OKOA EXTRA, emergency loan Kenya, online loans" />
  <meta name="author" content="OKOA EXTRA" />
  <link rel="canonical" href="https://inua-chapaa.com/" />

  {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://inua-chapaa.com/" />
  <meta property="og:title" content="OKOA EXTRA - Get Instant Mpesa Loans" />
  <meta property="og:description" content="Instant cash to Mpesa. Apply in minutes with OKOA EXTRA mobile loans." />
  <meta property="og:image" content="https://inua-chapaa.com/assets/social-banner.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://inua-chapaa.com/" />
  <meta name="twitter:title" content="OKOA EXTRA - Fast Mpesa Loans in Kenya" />
  <meta name="twitter:description" content="Quick and easy mobile loans. Apply now and receive your funds via Mpesa." />
  <meta name="twitter:image" content="https://inua-chapaa.com/assets/social-banner.jpg" />

  {/* TikTok Preview (optional if you're embedding a video) */}
  <meta property="og:video" content="https://www.tiktok.com/@inua_chapaa/video/1234567890123456" />
  <meta property="og:video:type" content="text/html" />
  <meta property="og:video:width" content="325" />
  <meta property="og:video:height" content="576" />

  {/* Google Ads Global Site Tag */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-XXXXXXXXX');
    `}
  </script>

  {/* Favicon + Manifest */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="manifest" href="/manifest.json" />
</Helmet>





const Appdet = () => {
  const navigate = useNavigate();

  // State for amounts and fees
  const [limit, setLimit] = useState(0);
  const [fee, setFee] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [receivable, setReceivable] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');




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
      s = 250;
    } else if (lims >= 4000) {
      f = 198;
      s = 200;
    } else if (lims <= 3500) {
      f = 156;
      s = 170;
    }
    setFee(f);
    setSavingAmount(s);
    localStorage.setItem('saveamount', s);

    const interestR = lims * 0.08;
    setInterest(interestR);

    const receiveableAmount = lims - (interestR + f);
    setReceivable(receiveableAmount);
  }, []);

  const [processing, setProcessing] = useState(false);

const goToVerification = () => {
  setProcessing(true); // show popup
  setTimeout(() => {
    navigate('/Verification'); // go after delay
  }, 4000); // 2 seconds delay
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
        <h4 id="limit1">
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
      {processing && (
  <div className="processing-overlay">
    <div className="processing-popup">
      <p>Processing your request...</p>
    </div>
  </div>
)}


      <div className="footer">© Okoa Extra 2025</div>
    </div>
  );
};

export default Appdet;
