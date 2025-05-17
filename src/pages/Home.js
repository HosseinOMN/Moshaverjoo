import React  from "react";
import './Home.css';
import {  useNavigate } from "react-router-dom";
import {specialties} from '../components/specialtiesData';
import ButtonCard from '../components/ButtonCard';

import DoctorCard from "../components/DoctorCard";
import doctors from "../components/DoctorsList.js";
import './DoctorsPage.css';
const Home = () => {
  const navigate = useNavigate();
  const topDoctors = doctors.filter(doctor => doctor.num_comment > 20 && doctor.avg_rate > 4.5);
  
  const handleMoreInfo = (id) => {
    navigate(`/doctors/${id}`);
  };
  return (
<div className="home-specialties">
  <h1 className='title1'>متخصص ها</h1>
  <button
    className="arrow-button left"
    onClick={() => {
      document.querySelector('.home-specialty-buttons').scrollBy({
        left: -300, // اسکرول به سمت چپ
        behavior: 'smooth',
      });
    }}
  >
    &#x276E; {/* فلش به سمت چپ */}
  </button>

  <div className="home-specialty-buttons">
    {specialties.map((specialty, index) => (
      <div key={index} className="home-specialty-button">
        <ButtonCard
          title={specialty.title}
          count={specialty.count}
          link={specialty.link}
        />
      </div>
      
    ))}
  </div>

  <button
    className="arrow-button right"
    onClick={() => {
      document.querySelector('.home-specialty-buttons').scrollBy({
        left: 300, // اسکرول به سمت راست
        behavior: 'smooth',
      });
    }}
  >
    &#x276F; {/* فلش به سمت راست */}
  </button>
  <div className="home-page">
      <h1 className="title1">متخصص‌های برتر</h1>

      <div className="home-page__top-doctors">
        {topDoctors.length > 0 ? (
          topDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} onMoreInfo={handleMoreInfo}/>
          ))
        ) : (
          <p>هیچ دکتر برتری پیدا نشد.</p>
        )}
      </div>
    </div>
</div>


  );

};

export default Home;
