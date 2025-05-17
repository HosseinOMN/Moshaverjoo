import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import doctors from "../components/DoctorsList.js";
import { specialties } from "../components/specialtiesData.js"; 
import './DoctorsPage.css';

const DoctorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(''); 

 
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const specialty = queryParams.get('specialty');
    if (specialty) {
      setSelectedSpecialty(decodeURIComponent(specialty));  
    }
  }, [location.search]);

  const handleMoreInfo = (id) => {
    navigate(`/doctors/${id}`);
  };

  
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (doctor.name.includes(searchQuery) || doctor.specialty.some((spec) => spec.includes(searchQuery))) && 
      (selectedSpecialty ? doctor.specialty.includes(selectedSpecialty) : true)
    );
  });

 
  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty(specialty);
    navigate(`/doctors?specialty=${encodeURIComponent(specialty)}`);  
  };

  return (
    <div className="doctors-page">
      <h1>لیست دکترها</h1>
      
      {/* نوار جستجو */}
      <div className="doctors-page__search-bar">
        <input
          type="text"
          placeholder="جستجو بر اساس نام یا تخصص..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar__input"
        />

      </div>

      {/* دکمه‌های فیلتر تخصص‌ها از لیست `specialties` */}
      <div className="doctors-page__specialties">
        {specialties.map((specialty) => (
          <button
            key={specialty.title}  
            onClick={() => handleSpecialtyClick(specialty.title)}  
            className={`specialty-button ${selectedSpecialty === specialty.title ? 'active' : ''}`}
          >
            {specialty.title}
          </button>
        ))}
        <button
          onClick={() => handleSpecialtyClick('')} 
          className={`specialty-button ${selectedSpecialty === '' ? 'active' : ''}`}
        >
          همه تخصص‌ها
        </button>
      </div>


      <div className="doctors-page__list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onMoreInfo={handleMoreInfo} />
          ))
        ) : (
          <p>دکتری با این تخصص یافت نشد.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
