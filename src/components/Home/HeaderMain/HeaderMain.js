import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    const history = useHistory()
    return (
        <main style={{height:'600px'}} className=" w-100">
            <div className="row d-flex align-items-center mx-4">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className=" btn-main" onClick={()=> history.push('/appointment')}>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 mt-4">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
            </div>
        </main>
    );
};

export default HeaderMain;