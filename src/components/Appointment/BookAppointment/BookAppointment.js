import React from 'react';
const BookAppointment = ({data , getAppointment}) => {
    return (
        <div className="col-md-4 text-center mt-4">
            <h5 className="text-main ">{data.serviceName}</h5>
            <h6 className="text-center mt-2">{data.date}</h6>
            <p className="text-secondary">{data.space} SPACE AVAILABLE</p>
            <div className="mt4">
                <button className="btn-main" onClick={()=>getAppointment(data._id)}>
                    GET APPOINTMENT
                </button>
            </div>
        </div>
    );
};

export default BookAppointment;