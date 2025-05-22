import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';
import '../styles/shared.css';
import '../styles/main.css';
import 'toastify-js/src/toastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";  // Ensure this imports your Firebase setup correctly
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


const Signup = ({ showToast }) => {
  const navigate = useNavigate();

  // Define state variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save additional information (name and phone) to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);

    // Show toast after saving
    if (typeof showToast === 'function') {
      console.log("Toast function exists. Showing toast...");
      showToast();

      // Wait briefly so toast has time to show
      setTimeout(() => {
        navigate("/otherdetails");
      }, 200); // 200ms delay is usually enough
    } else {
      console.log("Toast function not passed!");
      navigate("/otherdetails");
    }
    
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Firebase signup
      await createUserWithEmailAndPassword(auth, email, password);
      showToast("Signup successful!");
      navigate("/otherdetails");  // Navigate to the next page after successful signup
    } catch (error) {
      showToast(error.message);  // Show error if signup fails
    }
    if (!/^07\d{8}$/.test(phone)) {
      alert("Please enter a valid Kenyan MPESA phone number starting with 07.");
      return;
    }
    // Submit phone number to the backend or handle accordingly
    console.log("Phone submitted:", phone);
     const passwordValid = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(password);

    if (!passwordValid) {
      alert("Password must be at least 8 characters long and include a special character.");
      return;
    }

    // Submit the password or handle accordingly
    console.log("Password submitted:", password);
  };
  

  return (
    <>
      {/* PWA Install Popup */}
      <div id="pwa-install-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img src="assets/process.gif" alt="Authorization GIF" id="gifcontent" />
          </div>
        </div>
      </div>

      {/* Preloader Section */}
      <div className="preloader" id="preloader" style={{ opacity: 0, display: 'none' }}>
        <div className="loader">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
        <div className="preloader-text">Loading, please wait...</div>
      </div>

      <div className="main-container">
        <div className="left-content">
          <h1>INUA <br /> CHAPAA</h1>
          <p>
            Let us help you manage your finances effortlessly.
            Get a loan for business, personal needs, emergencies, or more.
          </p>
        </div>

        <div className="form-wrapper">
          <h1>Find Your Loan Eligibility</h1>
          <h3>We offer loans from Ksh. 2,000 - 50,000 loan to MPESA</h3>

          <form id="loanForm" onSubmit={handleSignup}>
            {/* Fields for user to input information */}
            <input
              type="text"
              id="names"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              required
            />
            <select id="county" required>
  <option value="" disabled selected>Select County</option>
  <option value="mombasa">Mombasa</option>
  <option value="kwale">Kwale</option>
  <option value="kilifi">Kilifi</option>
  <option value="tana_river">Tana River</option>
  <option value="lamu">Lamu</option>
  <option value="taita_taveta">Taita-Taveta</option>
  <option value="garissa">Garissa</option>
  <option value="wajir">Wajir</option>
  <option value="mandera">Mandera</option>
  <option value="marsabit">Marsabit</option>
  <option value="isiolo">Isiolo</option>
  <option value="meru">Meru</option>
  <option value="tharaka_nithi">Tharaka-Nithi</option>
  <option value="embu">Embu</option>
  <option value="kitui">Kitui</option>
  <option value="machakos">Machakos</option>
  <option value="makueni">Makueni</option>
  <option value="nyandarua">Nyandarua</option>
  <option value="nyeri">Nyeri</option>
  <option value="kirinyaga">Kirinyaga</option>
  <option value="murang_a">Murang’a</option>
  <option value="kiambu">Kiambu</option>
  <option value="turkana">Turkana</option>
  <option value="west_pokot">West Pokot</option>
  <option value="samburu">Samburu</option>
  <option value="trans_nzoia">Trans Nzoia</option>
  <option value="uasin_gishu">Uasin Gishu</option>
  <option value="elgeyo_marakwet">Elgeyo-Marakwet</option>
  <option value="nandi">Nandi</option>
  <option value="baringo">Baringo</option>
  <option value="laikipia">Laikipia</option>
  <option value="nakuru">Nakuru</option>
  <option value="narok">Narok</option>
  <option value="kajiado">Kajiado</option>
  <option value="kericho">Kericho</option>
  <option value="bomet">Bomet</option>
  <option value="kakamega">Kakamega</option>
  <option value="vihiga">Vihiga</option>
  <option value="bungoma">Bungoma</option>
  <option value="busia">Busia</option>
  <option value="siaya">Siaya</option>
  <option value="kisumu">Kisumu</option>
  <option value="homa_bay">Homa Bay</option>
  <option value="migori">Migori</option>
  <option value="kisii">Kisii</option>
  <option value="nyamira">Nyamira</option>
  <option value="nairobi">Nairobi</option>
</select>
<input
  type="tel"
  id="mpesas"
  name="mpesas"
  placeholder="MPESA Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
  pattern="^07\d{8}$" // Validates Kenyan phone numbers starting with '07' and 10 digits long
  title="Enter a valid Kenyan phone number starting with 07"
/>
         <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8"
          title="Password must be at least 8 characters long and include a special character"
          style={{ paddingRight: '30px' }} // Add space for the eye icon
        />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
            <input type="text" id="idNumber" placeholder="National ID Number" required />
            <select id="loanType" required>
              <option value="" disabled selected>Select Gender</option>
              <option value="Personal">Female</option>
              <option value="Car">Male</option>
              <option value="Business">Other</option>
            </select>
            <input id="DOB" placeholder="Date of Birth: dd/mm/yy" required />
            <select id="maritalstatus" required>
              <option value="" disabled selected>Marital Status</option>
              <option value="Personal">Single</option>
              <option value="Car">Married</option>
              <option value="Business">Divorced</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Next
            </button>
          </form>

          <p className="note">
            No CRB Check. No Guarantors. Disbursed to MPESA. No Paperwork.
          </p>
          <p className="disclaimer">
            By submitting you confirm that you accept the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2025 Inua Chapaa. All rights reserved. <a href="/">Home</a><a href="/login">Login</a></p>
      </footer>
    </>
  );
};

export default Signup;
