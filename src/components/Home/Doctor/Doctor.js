import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({data}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3 fix-doctor-img" src={data.photo} alt={data.name}/>
            <h4>{data.name}</h4>
            <p> <FontAwesomeIcon className="text-main" icon={faPhoneAlt}/>{data.phoneNum}</p>
        </div>
    );
};

export default Doctor;