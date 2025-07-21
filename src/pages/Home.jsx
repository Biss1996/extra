import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

<Helmet>
  {/* Primary SEO */}
  <title>OKOA CHAPAA - Instant Mpesa Loans in Kenya</title>
  <meta
    name="description"
    content="Need fast cash? OKOA CHAPAA offers instant mobile loans sent to your Mpesa account. Quick, safe, and hassle-free."
  />
  <meta
    name="keywords"
    content="Mpesa loan, instant loan Kenya, mobile loan app, OKOA CHAPAA, emergency loan Kenya, online loans"
  />
  <meta name="author" content="OKOA CHAPAA" />
  <link rel="canonical" href="https://inua-chapaa.com/" />

  {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://inua-chapaa.com/" />
  <meta property="og:title" content="OKOA CHAPAA - Get Instant Mpesa Loans" />
  <meta
    property="og:description"
    content="Instant cash to Mpesa. Apply in minutes with OKOA CHAPAA mobile loans."
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
    content="OKOA CHAPAA - Fast Mpesa Loans in Kenya"
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

const Home = ({ showToast }) => {
  const navigate = useNavigate();

 useEffect(() => {
    const interval = setInterval(showToast, 9000);
    return () => clearInterval(interval); // clean up on unmount
  }, [showToast]);

  return (
    <div className="section">
      <header>
        <div className="header-content">
          <h3><strong>OKOA</strong></h3>
          <h3><strong>CHAPAA</strong></h3>
          <p><strong>Quick, Safe, and Easy Mobile Loan</strong></p>
        </div>
      </header>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>Need Cash Fast?</h2>
        <p>
          OKOA CHAPAA offers instant loans to help you meet your financial
          needs. Whether it’s for emergencies, school fees, or unexpected
          expenses—we’ve got you covered.
        </p>

        <h2>Why Choose OKOA CHAPAA?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Fast Approval</h3>
            <p>Loans disbursed to your Mpesa in minutes.</p>
          </div>
          <div className="benefit">
            <h3>Flexible Repayment</h3>
            <p>Repay at your own pace with helpful reminders.</p>
          </div>
          <div className="benefit">
            <h3>No Hidden Fees</h3>
            <p>Transparent terms, no surprises.</p>
          </div>
          <div className="benefit">
            <h3>24/7 Support</h3>
            <p>Need help? Reach us anytime via the app.</p>
          </div>
        </div>

        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>“OKOA CHAPAA helped me pay school fees on time. Lifesaver!”</p>
            <strong>- James M.</strong>
          </div>
          <div className="testimonial">
            <p>“Very convenient. Got money within 10 minutes.”</p>
            <strong>- Wanjiku K.</strong>
          </div>
        </div>

        <h2>Ready to Boost Your Finances?</h2>
        <p>Join thousands who trust OKOA CHAPAA for emergency loans.</p>

        <button
          className="cta-button"
          onClick={() => {
            window.gtag?.("event", "conversion", {
              send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
            });
            navigate("/signup");
          }}
        >
          Apply Now!
        </button>

        <footer>&copy; 2025 OKOA CHAPAA. All rights reserved.</footer>
      </section>
    </div>
  );
};

export default Home;
