import React, { useEffect, useState } from 'react';
import Sidebar from '../../dashboard/sidebar/Sidebar';
import AppointmentDataTable from '../appointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://salty-citadel-54178.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <div className="col-md-2"><Sidebar /></div>
            <div className="col-md-9 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;