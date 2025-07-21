import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import "../styles/shared.css";
import "../styles/main.css";
import "toastify-js/src/toastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this imports your Firebase setup correctly

const Signup = ({ showToast }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(showToast, 7000);
    return () => clearInterval(interval);
  }, [showToast]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Accept 07 or 01 Kenyan numbers, 10 digits
    if (!/^0(7|1)\d{8}$/.test(phone)) {
      alert("Please enter a valid Kenyan MPESA phone number starting with 07 or 01.");
      return;
    }

    const formattedPhone = "254" + phone.slice(1);

    if (!/^.{4,}$/.test(password)) {
      alert("Password must be at least 4 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("name", name);
      localStorage.setItem("phone", formattedPhone);

      if (typeof showToast === "function") {
        showToast("Signup successful!");
      }

      navigate("/otherdetails");
    } catch (error) {
      if (typeof showToast === "function") {
        showToast(error.message);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <>
      {/* PWA Install Popup */}
      <div id="pwa-install-popup">
        <div className="pwa-popup-content">
          <div className="gif-container">
            <img
              src="assets/process.gif"
              alt="Authorization GIF"
              id="gifcontent"
            />
          </div>
        </div>
      </div>

      {/* Preloader */}
      <div
        className="preloader"
        id="preloader"
        style={{ opacity: 0, display: "none" }}
      >
        <div className="loader">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
        <div className="preloader-text">Loading, please wait...</div>
      </div>

      <div className="main-container">
        <div className="left-content">
          <h1>
            OKOA <br /> CHAPAA
          </h1>
          <p>
            Let us help you manage your finances effortlessly. Get a loan for
            business, personal needs, emergencies, or more.
          </p>
        </div>

        <div className="form-wrapper">
          <h1>Find Your Loan Eligibility</h1>
          <h3>We offer loans from Ksh. 2,000 - 50,000 loan to MPESA</h3>

          <form id="loanForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="names"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select id="county" required>
              <option value="" disabled selected>
                Select County
              </option>
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
              pattern="^0(7|1)\d{8}$"
              title="Enter a valid Kenyan phone number starting with 07 or 01"
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="4"
              title="Password must be at least 4 characters long"
              style={{ paddingRight: "30px" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              id="idNumber"
              placeholder="National ID Number"
              required
            />
            <select id="loanType" required>
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="Personal">Female</option>
              <option value="Car">Male</option>
              <option value="Business">Other</option>
            </select>
            <input id="DOB" placeholder="Date of Birth: dd/mm/yy" required />
            <select id="maritalstatus" required>
              <option value="" disabled selected>
                Marital Status
              </option>
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
            By submitting you confirm that you accept the{" "}
            <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <footer>
        <p>
          © 2025 Okoa Chapaa. All rights reserved. <a href="/">Home</a>
          <a href="/login">Login</a>
        </p>
      </footer>
    </>
  );
};

export default Signup;
