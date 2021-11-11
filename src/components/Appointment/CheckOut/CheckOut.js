import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Footer from '../../Home/Footer/Footer';
import { useHistory, useParams } from 'react-router';
import axios from '../../../axios';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement(document.getElementById('root'));
const CheckOut = () => {
    const [appointment, setAppointment] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);
    const history = useHistory()
    // const [fromData, setFromData] = useState({})
    // const [value,setValue] = useState({}) 
    const [userDataInfo] = useContext(UserContext)
    const { register, handleSubmit, reset } = useForm()
    let onSubmit = async(data) => {
        // setFromData(data)
        await axios.post('/patients',{
            patientsName:data.patientsName,
            patientsAge:data.patientsAge,
            patientsPhoneNumber:data.patientsPhoneNumber,
            email:userDataInfo.email,
            serviceName:appointment.serviceName,
            appointmentDate:userDataInfo.appointmentDate.toDateString(),
            appointmentTime:appointment.time
        })
        .then(res => {
            if(res.data){
                reset()
                closeModal()
                history.push('/myAppointment')
            }
        })
        
        // setFromData('')
    };
    let { appointmentId } = useParams()
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    // console.log(appointmentId)
    useEffect(() => {
        axios.get(`/doctor/${appointmentId}`)
            .then(res => setAppointment(res.data))
    }, [appointmentId])
    // const handleFromSubmit = async() => {
    // }
    // useEffect(() => {
    //     // console.log(fromData)
    //     handleFromSubmit()
    // }, [fromData])






    return (
        <div className="">
            <Navbar />
            <div className="container">
                <h2 className="text-main text-center mt-4">Click to book Your Appointment at {userDataInfo.appointmentDateStates ? userDataInfo.appointmentDate.toDateString() : new Date().toDateString()}</h2>
                <div className="row mt-5 d-flex justify-content-around align-items-center">
                    <div className="col-md-5 col-sm-4 col-6 text-center ">
                        <h5 className="text-main ">{appointment.serviceName}</h5>
                        <h6 className=" mt-2">{appointment.date}</h6>
                        <p className="text-secondary">10 SPACE AVAILABLE</p>
                        <div className="mt4">
                            <button className="btn-main" onClick={openModal}>
                                BOOK APPOINTMENT
                            </button>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6 col-6 text-center">
                        <img src={appointment.image} className="img-fluid" alt="" />

                        <p className="h5 mt-4">{appointment.name}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="text-center">About Me</h4>
                    <p className="mt-4 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quia inventore vitae est! Voluptatum velit iste vel corrupti quia molestias natus esse modi obcaecati ipsam ipsa similique aliquid atque, a aperiam ut consequuntur reiciendis molestiae officia nostrum vero, cupiditate laudantium dolorem? Maxime fugit deleniti nobis!</p>
                </div>
            </div>
            {/* modal */}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                aria={{
                    labelledby: "heading",
                    describedby: "full_description"
                }}
            >

                {/* <div className="modal-header">
                            <h5 className="modal-title text-main" id="exampleModalLabel">Fill The Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                <div className="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Patients Name: </label>
                            <input type="text" className="form-control" {...register("patientsName")} id="recipient-name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Phone Number: </label>
                            <input type="tel" className="form-control"  {...register("patientsPhoneNumber")} id="recipient-name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Patients Age: </label>
                            <input type="text" className="form-control"  {...register("patientsAge")} id="recipient-name" required />
                        </div>
                        <div className="mb-3">
                            {/* <label htmlFor="recipient-name" className="col-form-label me-4">Patients Gender:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input doctor" name="PatientsGender" {...register("PatientsGender")} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"required />
                                        <label className="form-check-label" value="male" htmlFor="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input doctor" name="PatientsGender" type="radio"  {...register("PatientsGender")} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" value="female" htmlFor="inlineRadio2">Female</label>
                                    </div> */}
                            <select className="form-select" aria-label="Default select example" {...register("gender")}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" onClick={closeModal} data-bs-dismiss="modal">Close</button>
                            <input type="submit"  value="Submit" className="btn-main" />
                        </div>
                    </form>
                </div>
            </Modal>
            {/* finish modal */}
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default CheckOut;