import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'
import chair from './../../images/chair.png'
import BookAppointment from './BookAppointment/BookAppointment';
import Footer from '../Home/Footer/Footer';
import axios from './../../axios';
import Loading from '../CommonComponent/Loading/Loading';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
// const bookingData = [
//     {
//         id: 1,
//         subject: 'Teeth Orthodontics',
//         visitingHour: '8:00 AM - 9:00 AM',
//         totalSpace: 10
//     },
//     {
//         id: 2,
//         subject: 'Cosmetic Dentistry',
//         visitingHour: '10:50 AM - 11:30 AM',
//         totalSpace: 10
//     },
//     {
//         id: 3,
//         subject: 'Teeth Cleaning',
//         visitingHour: '5:00 PM - 6:00 PM',
//         totalSpace: 10
//     },
//     {
//         id: 4,
//         subject: 'Cavity Protection',
//         visitingHour: '7:00 AM - 8:30 AM',
//         totalSpace: 10
//     },
//     {
//         id: 5,
//         subject: 'Teeth Orthodontics',
//         visitingHour: '8:00 AM - 9:00 AM',
//         totalSpace: 10
//     },
//     {
//         id: 6,
//         subject: 'Teeth Orthodontics',
//         visitingHour: '8:00 AM - 9:00 AM',
//         totalSpace: 10
//     }
// ]
const Appointment = () => {
    const [value, setValue] = useState(new Date());
    const history = useHistory()
    const [appointmentData ,setAppointmentData] = useState([])
    const [userDataInfo,setUserDataInfo] = useContext(UserContext)
    const getAppointment = (data)=>{
        const newAppointmentData = {...userDataInfo}
              newAppointmentData.appointmentDate = value
              newAppointmentData.appointmentDateStates=true
              setUserDataInfo(newAppointmentData)

        history.push(`/checkout/${data}`)
    }
    useEffect(()=>{
        axios.get('/appointments')
        .then(res => setAppointmentData(res.data))
    },[])
    return (
        <div>
            <Navbar />
            <div className="appointment_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12 ">
                            <h2 className="text-center">Appointment</h2>
                            <div className="mt-5 m-auto text-center">
                                <Calendar
                                    onChange={setValue}
                                    value={value}
                                />
                            </div>
                        </div>
                        <div className="col-md-7 d-flex align-items-center appointment_chair">
                            <img className="img-fluid" src={chair} alt="chair" />
                        </div>
                    </div>
                   
                    <div className="mt-5">
                    <h2 className="text-main text-center mt-5">Your Available Appointment is {value.toDateString()}</h2>
                    </div>
                    <div className="row mt-5">
                        {
                         appointmentData.length ? appointmentData.map(data => <BookAppointment key={data._id} getAppointment={getAppointment} data={data} />) : <Loading/>
                        }
                    </div>
                </div>
            </div>
            <div className="mt-5">
            <Footer/>
            </div>
        </div>
    );
};

export default Appointment;