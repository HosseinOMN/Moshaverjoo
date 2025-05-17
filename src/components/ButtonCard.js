
import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonCard.css';

const ButtonCard = ({ title, count, link }) => {
  return (
    <Link to={link} className="home-specialty-button">
      <div className="specialty-title">{title}</div>
      <div className="specialty-count">{count} متخصص</div>
      <span className="home-specialty-arrow">‹</span>
    </Link>
  );
};

export default ButtonCard;
