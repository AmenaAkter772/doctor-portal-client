import React, { useState } from 'react';
import Footer from '../../components/shared/footer/Footer';
import NavbarDark from '../../components/shared/navbar/NavbarDark';
import AppointmentHeader from '../../components/appointment/appointmentHeader/AppointmentHeader';
import BookAppointment from '../../components/appointment/bookAppointment/BookAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <NavbarDark />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appointment;