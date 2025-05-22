import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Needed for programmatic navigation
import "../styles/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
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

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/review");
    } catch (err) {
      setError("Invalid credentials or unregistered account.");
      setLoading(false);
    }
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/forgot-password"); // ✅ Use this when route is ready
    }, 2000);
  };

  const handleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/signup");
    }, 2000);
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay animate-overlay">
          <div className="spinner-logo-wrapper">
            <img src="/load.gif" alt="Loading..." className="spinner-logo" />
            <p className="loading-text">Please wait...</p>
          </div>
        </div>
      )}

      <main className="login-wrapper">
        <div className="login-container">
          <h1 className="brand-title">INUA CHAPAA</h1>
          <p className="subtitle">Secure Instant Loans to Your Mpesa</p>

          {error && <p className="error-msg">{error}</p>}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot" onClick={handleForgot}>
              Forgot Password?
            </div>

            <button type="submit" className="primary-btn">
              {loading ? "Logging in..." : "Log In"}
            </button>

            <div className="signup-callout" onClick={handleSignup}>
              New here? <span>Create an account</span>
            </div>
          </form>
        </div>

        <footer className="footer">
          © 2025 SecureLend Financial Services
        </footer>
      </main>
    </>
  );
};

export default Login;
