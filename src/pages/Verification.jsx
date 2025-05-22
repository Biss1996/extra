import React, { useState, useEffect } from "react";
import "../styles/Verification.css";
import { useNavigate } from "react-router-dom";
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

const Verification = () => {
  const [limit, setLimit] = useState(7000);
  const [savingAmount, setSavingAmount] = useState(160);
  const [messageVisible, setMessageVisible] = useState(false);
  const [mpesaMessage, setMpesaMessage] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [verificationClass, setVerificationClass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedLimit = parseFloat(localStorage.getItem("limit"));
    const storedSaveAmount = parseFloat(localStorage.getItem("saveamount"));
    if (!isNaN(storedLimit)) setLimit(storedLimit);
    if (!isNaN(storedSaveAmount)) setSavingAmount(storedSaveAmount);
  }, []);

  const copyTillNumber = () => {
    navigator.clipboard.writeText("5622370");
    alert("Till number copied!");
  };

  const openModal = () => setMessageVisible(true);
  const closeModal = () => {
    setMessageVisible(false);
    setMpesaMessage("");
    setVerificationMessage("");
    setVerificationClass("");
  };

  const verifyTransaction = () => {
    const message = mpesaMessage.trim().toLowerCase();

    if (
      message.includes("confirmed") &&
      message.includes("GADGETCOM Ventures") &&
      message.includes("ksh") &&
      (message.includes("sent to") || message.includes("paid to")) &&
      message.includes("on")
    ) {
      setVerificationMessage("Payment verified successfully!");
      setVerificationClass("success");
      setTimeout(() => {
        closeModal(); // hide modal after a short delay
        navigate("/review");
      }, 1000); // 1 second delay to show success message briefly
    } else {
      setVerificationMessage(
        "Please paste the full M-PESA confirmation message.",
      );
      setVerificationClass("error");
    }
  };

  const goToSavingsPlan = () => {
    window.location.href = "savings";
  };

  useEffect(() => {
  const isAuthenticated = localStorage.getItem("name") && localStorage.getItem("phone");
  if (!isAuthenticated) {
    navigate("/signup");
  }
}, []);


  return (
    <>
      <h3>.</h3>
      <div className="container">
        <h5>
          You're just one step away from receiving{" "}
          <strong>Ksh {limit.toLocaleString()}</strong>!
          <br />
          <br />
          Secure your loan by saving{" "}
          <strong>Ksh {savingAmount.toLocaleString()}</strong> now. This
          strengthens your credit and confirms your legal identity and
          commitment.
          <br />
          <br />
          Delay could cost you this opportunity. Save now, access your loan, and
          unlock future benefits.
        </h5>

        <div className="labels">
          <button
            className="verify-btnn"
            onClick={goToSavingsPlan}
            style={{
              marginTop: "5%",
              color: "orangered",
              background: "linear-gradient(135deg, #31463f, #070930)",
              fontSize: "medium",
            }}
          >
            Change Savings Plan
          </button>
        </div>

        <div className="loan-tabless">
          <div className="labels">
            <span style={{ marginLeft: "5%" }}>
              <strong>How to save to your INUA CHAPAA A/C:</strong>
            </span>
          </div>
          <div className="labels">
            Go to M~Pesa :{" "}
            <span style={{ marginLeft: "5.5%" }}>
              <strong>M~pesa</strong>
            </span>
          </div>
          <div className="labels">
            Lipa na M~Pesa :{" "}
            <span>
              <strong>Buy Goods & Services</strong>
            </span>
          </div>
          <div className="labels">
            Till Number :{" "}
            <span>
              <strong>5622370</strong>
            </span>
          </div>
          <div className="labels">
            Till Name :{" "}
            <span>
              <strong>GADGETCOM Ventures</strong>
            </span>
          </div>

          <div className="labels">
            <button
              className="verify-btnn"
              onClick={copyTillNumber}
              id="copytill"
            >
              CLICK TO COPY TILL
            </button>
          </div>
          <div className="labels">
            Enter Amount :{" "}
            <span style={{ marginLeft: "13%" }}>
              <strong id="savingsamountt">
                Ksh {savingAmount.toLocaleString()}
              </strong>
            </span>
          </div>
          <div className="labels">
            Complete Payment :{" "}
            <span style={{ marginLeft: "3%" }}>
              <strong>Enter M~Pesa Pin</strong>
            </span>
          </div>

          <button className="open-modal-btn" onClick={openModal}>
            Verify Payment to Initiate Loan Disbursement
          </button>
        </div>

        <div className={`overlay ${messageVisible ? "show" : ""}`}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="verifyTitle">
  <h2 id="verifyTitle">Verify Payments</h2>
  
  <button className="close-modal-btn" onClick={closeModal} aria-label="Close Modal">×</button>
  
  <p>
    Copy the entire confirmation message you received from M-PESA
    after making payments and paste it in the field below, then click the verify button.
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
    <div className={`message ${verificationClass}`}>
      {verificationMessage}
    </div>
            )}
          </div>
        </div>

        <div className="footer">© Inua Chapaa 2025</div>
      </div>
    </>
  );
};

export default Verification;
