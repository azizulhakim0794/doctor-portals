import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 doctorImg">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-6 ms-5 col-sm-10 col-10 text-white py-5 z-index-2">
                        <h5 className="text-main text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn-main">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;