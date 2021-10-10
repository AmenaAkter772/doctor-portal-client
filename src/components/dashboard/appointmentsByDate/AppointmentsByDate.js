import React from 'react';
import AppointmentShortList from '../appointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointment}) => {
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointment.length ?
                 <AppointmentShortList appointments={appointment} />
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;