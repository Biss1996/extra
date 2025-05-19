import React, { useState } from 'react';
import '../styles/Login.css'; // Extract the <style> section into Login.css and import it

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = '/dashboard'; // Use a route you have defined
    }, 2000);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // window.location.href = '/forgot-password';
    }, 2000);
  };

  const handleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = '/signup';
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
        <h1 className="login-title">Welcome Back</h1>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

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
