import React from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../components/DoctorsList.js';
import './DoctorDetails.css';

const DoctorDetails = () => {
  const { id } = useParams();


  const doctor = doctors.find(doctor => doctor.id === parseInt(id));


  if (!doctor) {
    return <p>دکتری با این مشخصات پیدا نشد.</p>;
  }

  return (
    <div className='doctor-detail-container'>
      <div className="doctor-details">
        <div>
        <img src={doctor.image} alt={doctor.name} />
        </div>
        <div>
        <h1>{doctor.name}</h1>

<p>{doctor.specialty.join(' | ')}</p>
<hr></hr>
<p>کد نظام پزشکی: {doctor.medicalCode}</p>
<p>آدرس: {doctor.address || 'آدرس ثبت نشده است'}</p>
<p>نظرات:</p>
<ul>
  {doctor.reviews 
    ? doctor.reviews.map((review, index) => (
        <li key={index}>{review}</li>
      ))
    : <p>نظری ثبت نشده است</p>
  }
</ul>
        </div>

      </div>
      <div className='doctor-exact-address'>
        <p>آدرس دقیق: {doctor.exact_address || 'آدرس ثبت نشده است' }</p>
        <p>
  شماره تماس: 
  {doctor.number && doctor.secondery_number
    ? `${doctor.number} - ${doctor.secondery_number}`
    : doctor.number
    ? doctor.number
    : doctor.secondery_number
    ? doctor.secondery_number
    : "شماره تماسی ثبت نشده است"}
</p>

      </div>

  </div>
  );
};

export default DoctorDetails;
