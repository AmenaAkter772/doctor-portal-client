import React from 'react';
import img from '../../../assets/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Coudi</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>  01756-123456</p>
        </div>
    );
};

export default Doctor;