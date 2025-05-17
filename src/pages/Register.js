import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; 
import { ArrowIcon1, ArrowIcon2 } from "./Icons";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("رمز عبور و تایید رمز عبور یکسان نیستند.");
      setLoading(false);
      return;
    }

    if (!/^\d{10,15}$/.test(phoneNumber)) {
      setError("شماره تلفن وارد شده معتبر نیست.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://your-api-url.com/register", {
        firstName,
        lastName,
        phoneNumber,
        password,
      });

      setSuccess("ثبت‌نام با موفقیت انجام شد! لطفاً وارد شوید.");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">ثبت‌نام</h2>
      {error && <div className="alert-message error">{error}</div>}
      {success && <div className="alert-message success">{success}</div>}

      <div className="input-group">
        <label>اسم کوچک</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>اسم خانوادگی</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>شماره تلفن</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>رمز عبور</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>تایید رمز عبور</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
          className={`animated-button ${loading ? "loading" : ""}`}
            onClick={handleRegister}
           disabled={loading}
>
          <ArrowIcon1 /> {/* آیکون اول */}
          <span className="text">{loading ? "در حال ثبت‌نام..." : "ثبت‌نام کنید"}</span>
          <span className="circle"></span>
         <ArrowIcon2 /> {/* آیکون دوم */}
     </button>


      <p className="register-link">
        قبلا ثبت نام کرده اید؟ <a href="/Login">وارد شوید</a>
      </p>
    </div>
  );
};

export default Register;
