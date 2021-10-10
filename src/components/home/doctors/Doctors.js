import React from 'react';
import Doctor from '../doctor/Doctor';

const Doctors = () => {
    return (
        <section>
            <div className="container">
                <h5 className="text-center text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor/>
                    <Doctor/>
                    <Doctor/>

                </div>
            </div>
        </section>
    );
};

export default Doctors;