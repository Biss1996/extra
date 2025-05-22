import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Eligibility.css';
import loadGif from '../assets/process.gif';
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



const Eligibilitycheck = () => {
  const [timeLeft, setTimeLeft] = useState(1);
  const [statusText, setStatusText] = useState('Requesting ...');
  const [buttonVisible, setButtonVisible] = useState(false);
  const [gifSrc, setGifSrc] = useState(loadGif);

  const [eligibilityMessage, setEligibilityMessage] = useState('The system is evaluating your loan eligibility and limit.');
  
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Start a timer to simulate the process
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime + 1;

        // Update status text based on the timer
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

    // Cleanup the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

   const nextPage = () => {
    setGifSrc(loadGif); // ✅ re-set the gif
    setTimeout(() => {
      navigate('/savings');
    }, 1000);
  };

  return (
    <div>
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
