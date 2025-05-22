import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Appdet.css";
import { Helmet } from "react-helmet-async";

<Helmet>
  {/* Primary SEO */}
  <title>INUA CHAPAA - Instant Mpesa Loans in Kenya</title>
  <meta
    name="description"
    content="Need fast cash? INUA CHAPAA offers instant mobile loans sent to your Mpesa account. Quick, safe, and hassle-free."
  />
  <meta
    name="keywords"
    content="Mpesa loan, instant loan Kenya, mobile loan app, INUA CHAPAA, emergency loan Kenya, online loans"
  />
  <meta name="author" content="INUA CHAPAA" />
  <link rel="canonical" href="https://inua-chapaa.com/" />

  {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://inua-chapaa.com/" />
  <meta property="og:title" content="INUA CHAPAA - Get Instant Mpesa Loans" />
  <meta
    property="og:description"
    content="Instant cash to Mpesa. Apply in minutes with INUA CHAPAA mobile loans."
  />
  <meta
    property="og:image"
    content="https://inua-chapaa.com/assets/social-banner.jpg"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://inua-chapaa.com/" />
  <meta
    name="twitter:title"
    content="INUA CHAPAA - Fast Mpesa Loans in Kenya"
  />
  <meta
    name="twitter:description"
    content="Quick and easy mobile loans. Apply now and receive your funds via Mpesa."
  />
  <meta
    name="twitter:image"
    content="https://inua-chapaa.com/assets/social-banner.jpg"
  />

  {/* TikTok Preview (optional if you're embedding a video) */}
  <meta
    property="og:video"
    content="https://www.tiktok.com/@inua_chapaa/video/1234567890123456"
  />
  <meta property="og:video:type" content="text/html" />
  <meta property="og:video:width" content="325" />
  <meta property="og:video:height" content="576" />

  {/* Google Ads Global Site Tag */}
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
  ></script>
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
</Helmet>;

const Appdet = () => {
  const navigate = useNavigate();

  // State for amounts and fees
  const [limit, setLimit] = useState(0);
  const [fee, setFee] = useState(0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [receivable, setReceivable] = useState(0);
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState();

  useEffect(() => {
    // Get limit from localStorage or default to 0
    const stored = localStorage.getItem("name");
    if (stored) setName(stored);

    const storedPhone = localStorage.getItem("phone");
    if (storedPhone) setPhone(storedPhone);
    let lims = parseFloat(localStorage.getItem("limit")) || 0;
    setLimit(lims);

    // Determine fee and saving amount based on limit
    let f = 0,
      s = 0;
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
    localStorage.setItem("saveamount", s);

    const interestR = lims * 0.08;
    setInterest(interestR);

    const receiveableAmount = lims - (interestR + f);
    setReceivable(receiveableAmount);
  }, []);

  const goToVerification = () => {
    navigate("/Verification");
  };

  return (
    <div className="card">
      <h1 className="success-text">🎉 Eligibility Successful</h1>
      <p className="subtitle">You qualify for a loan</p>

      <div className="loan-amount">Ksh {limit.toFixed(2)}</div>

      <div className="loan-details">
        <div className="detail-row">
          <span>Service Fee:</span>
          <strong>Ksh {fee.toFixed(2)}</strong>
        </div>
        <div className="detail-row">
          <span>Interest (8%):</span>
          <strong>Ksh {interest.toFixed(2)}</strong>
        </div>
        <div className="detail-row">
          <span>Receivable Amount:</span>
          <strong>Ksh {receivable.toFixed(2)}</strong>
        </div>
      </div>

      <div className="mpesa-info">
        <p>
          <strong>Mpesa Name:</strong> {name}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      </div>

      <button className="cta-btn" onClick={goToVerification}>
        Apply Now
      </button>
    </div>
  );
};

export default Appdet;
