import React from 'react';
import Doctor from '../Doctor/Doctor';
import Doctor2 from '../../../images/doctors/doctor2.png';
import Doctor1 from '../../../images/doctors/doctor-sm.png';
import Doctor3 from '../../../images/doctors/doctor-3.png';
const doctorList  = [{id:"01",name:"Dr.Sham",phoneNum:"+88017333333334",photo:Doctor2}
,{id:"02",name:"Dr.Khan",phoneNum:"+88017334092534",photo:Doctor1},{id:"03",name:"Dr.Nakib",phoneNum:"+880173376433334",photo:Doctor3}]
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-main mb-5">Our Doctors</h5>
                <div className="row">
                   {
                       doctorList.map(data=><Doctor key={data.id} data={data}/>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Doctors;