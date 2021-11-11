import React from 'react';
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router';
const ServiceDetail = ({ service }) => {
    const history = useHistory()
    return (


        <div className="col text-center">
            
            <CardActionArea onClick={()=> history.push('/appointment')}>
            <div className="serviceCard">
                {/* <div className="col-md-4 text-center">
                <img style={{ height: '50px' }} src={service.img} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
            </div> */}
                <div className="">
                    <div className="text-center">
                        <img className="img-fluid" style={{ height: '64px', width: '64px' }} src={service.img} alt={service.name} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                </div>
            </CardActionArea>
            
        </div>

    );
};

export default ServiceDetail;