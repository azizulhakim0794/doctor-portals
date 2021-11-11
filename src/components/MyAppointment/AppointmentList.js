import axios from '../../axios';
import React from 'react';
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
const AppointmentList = ({ data, index }) => {
    const handleDeleteAppointment = async (deletedId) => {
        await axios.delete('/patients/' + deletedId)
            .then(res => {
                if (res.data) {
                    document.getElementById(`delete${deletedId}`).style.display = 'none'
                    closeModal()
                }
            })
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="">
            {/* Modal Start */}
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <br />
                    <div>Are You sure to delete this Appointment ?</div>
                    <br />
                    <button className="btn btn-outline-dark" onClick={closeModal}>close</button> <button className="btn-main" onClick={() => handleDeleteAppointment(data._id)}>Delete</button>
                </Modal>
            </div>
            {/* Modal Finish */}

            <div id={`delete${data._id}`}>

                <div className="alert alert-info " >
                    <div className="row h5">
                        <div className="col-md-1 col-sm-1 col-1"> {index + 1}.</div>
                        <div className="col-md-3">
                            <h6> {data.patientsName}</h6>
                            {data.serviceName}
                        </div>
                        <div className="col-md-5 d-flex justify-content-end">{(data.appointmentDate === new Date().toDateString()) ? `Today at ${data.appointmentTime}` : data.appointmentDate}</div>
                        <div className="col-md-3 col-sm-3 col-3 d-flex justify-content-end">{(data.appointmentDate === new Date().toDateString()) ? '' : <div> <button className="btn-main btn-sm" onClick={openModal}>Delete</button></div>}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;