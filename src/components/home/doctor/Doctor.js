import React from 'react';
import img from '../../../assets/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    console.log(doctor);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteDoctor/${id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
            <img style={{height:'200px'}} className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
            <h4>{doctor.name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>  01756-123456</p>
            <button className="btn-brand" onClick={() => handleDelete(doctor._id)}>Delete</button>
        </div>
    );
};

export default Doctor;