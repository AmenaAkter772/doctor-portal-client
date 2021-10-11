import React, { useEffect, useState } from 'react';
import Doctor from '../doctor/Doctor';

const Doctors = () => {
    const [doctorInfo, setDoctorInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctorInfo(data))
    }, [])

    return (
        <section>
            <div className="container">
                <h5 className="text-center text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctorInfo.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;