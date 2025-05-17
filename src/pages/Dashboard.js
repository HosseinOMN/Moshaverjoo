import React, { useEffect, useState } from "react";
import { Typography, Button, Alert } from "@mui/material";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("https://your-api-url.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        setError("خطایی در دریافت اطلاعات کاربر رخ داد.");
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!userData) {
    return <Typography>در حال بارگذاری...</Typography>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <Typography variant="h5">خوش آمدید، {userData.name}!</Typography>
      <Typography variant="body1">ایمیل: {userData.email}</Typography>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px" }}
        onClick={handleLogout}
      >
        خروج از حساب
      </Button>
    </div>
  );
};

export default Dashboard;
