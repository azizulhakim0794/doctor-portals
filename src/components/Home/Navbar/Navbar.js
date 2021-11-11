import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import doctorLogoImg from './../../../images/doctor-logo.png'
import { UserContext } from '../../../App';
import axios from '../../../axios';
const Navbar = () => {
  const [userDataInfo] = useContext(UserContext)
  const [myAppointment,setMyAppointment] = useState(false)
  useEffect(()=>{
    axios.get('/patients/'+userDataInfo.email)
    .then(res => setMyAppointment(res.data.length > 0))
  },[userDataInfo.email])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-none w-100">
      <div className="container-fluid">
        <img className="navbar-brand-logo" src={doctorLogoImg} alt="doctor-logo" />
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/appointment">Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>
            {myAppointment ? <li className="nav-item">
              <Link className="nav-link active" to="/myAppointment">My Appointment</Link>
            </li>: ''}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;