import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../appointmentsByDate/AppointmentsByDate';
import Sidebar from '../sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: "#F4FDB",
    height: "100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointment, setAppointment] = useState([])
    
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
            })
    }, [selectedDate])

    return (

        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 ms-5 mt-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointment={appointment} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;