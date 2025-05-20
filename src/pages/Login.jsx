import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Needed for programmatic navigation
import '../styles/Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
      navigate('/forgot-password'); // ✅ Use this when route is ready
    }, 2000);
  };

  const handleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/signup');
    }, 2000);
  };
  

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <main className="login-panel">
        <h1 className="login-title1">INUA CHAPAA</h1>
        <h1 className="login-title">Access Your Loans Safely & Securely</h1>

        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <a href="#" onClick={handleForgot}>Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>

          <div className="signup-link" onClick={handleSignup}>
            Create account now
          </div>
        </form>
      </main>

      <footer className="footer">
        <p>&copy; 2025 SecureLend Financial Services. NMLS #1234567.</p>
      </footer>
    </>
  );
};

export default Login;
