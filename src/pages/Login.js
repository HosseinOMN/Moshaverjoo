import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { ArrowIcon1, ArrowIcon2 } from "./Icons";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://your-api-url.com/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("authToken", token);
      window.location.href = "/";
    } catch (err) {
      setError("ایمیل یا رمز عبور اشتباه است.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container"> {/* باز کردن div اصلی برای کامپوننت */}
      <h2 className="login-title">ورود به حساب کاربری</h2>
      {error && <div className="alert-message">{error}</div>}
      <div className="input-group">
        <label htmlFor="email">ایمیل</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">رمز عبور</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
<div>
      <button
        className={`login-button ${loading ? "loading" : ""}`}
        onClick={handleLogin}
        disabled={loading}
      >
        <ArrowIcon1 /> 

        <span className="text">وارد شوید</span>
        <span className="circle"></span>
        <ArrowIcon2 /> 
      </button>

      <p className="register-link">
        حساب کاربری ندارید؟ <a href="/Register">ثبت نام</a> کنید
      </p>
      </div>
    </div> 
  );
};

export default Login;
