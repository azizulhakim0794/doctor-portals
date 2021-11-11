import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../../App';
import './MyAppointment.css'
import axios from '../../axios';
import AppointmentList from './AppointmentList';
import Loading from '../CommonComponent/Loading/Loading';
import Footer from '../Home/Footer/Footer';
const MyAppointment = () => {
    const [userDataInfo] = useContext(UserContext)
    const [appointmentList,setAppointmentList] = useState([])
    useEffect(()=>{
        axios.get('/patients/'+userDataInfo.email)
        .then(res => setAppointmentList(res.data))
    },[userDataInfo.email])
    return (
        <div>
            <Navbar/>
            <div className="container">
               <div className="row mt-5 list-header">
                   <div className="col-md-10 col-sm-10 col-10">
                   <h2>My All Appointments Date</h2>
                   </div>
                   <div className="col-md-2 col-sm-2 col-2 mr-auto d-flex justify-content-end">
                   <Avatar alt="Remy Sharp" src={userDataInfo.photoURL} />
                   </div>
               </div>
               <div className="appointments d-flex justify-content-around my-4 ">
                       <div className="w-100">
                        {
                           appointmentList.length ?  appointmentList.map((data ,index ) => <AppointmentList data={data} index={index} key={data._id}/>) : <Loading/>
                        }
                       </div>
               </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MyAppointment;