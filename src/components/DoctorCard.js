import React  from 'react';

import './DoctorCard.css';
import location from './img/icon-location.png'
import star from './img/icon-star.png'

const DoctorCard = ({ doctor, onMoreInfo }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-card__image" />
      <h3 className="doctor-card__name">{doctor.name}</h3>
      <p className="doctor-card__specialty">  تخصص‌ها: {doctor.specialty.join('، ')}</p>

      <p className="doctor-card__medical-code">کد نظام پزشکی: {doctor.medicalCode}</p>
     <div className='doctor-bottom'>
      <div className='doctor-card__city-info'>
       <img src={location} className="location-icon" />
       <p className="doctor-card__city">شهر: {doctor.city}</p>
      </div>
      <div className='doctor-card__score'>
      <img src={star} className='star-icon'/>
      <p className="doctor-card__avg-rate">{doctor.avg_rate}</p>
      <p className="doctor-card__num-comment"> ( {doctor.num_comment} امتیاز )</p>
      </div>
      </div>

      <div>
      <button onClick={() => onMoreInfo(doctor.id)} className="DoctorCardButton">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">اطلاعات بیشتر</span>
      </button>

    </div>
    </div>
  );

  
};

export default DoctorCard;
