import React, { useState } from 'react';
import AppointmentForm from '../appointmentModalForm/AppointmentModalForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-primary btn-brand text-uppercase">book appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} title={booking.subject} date={date} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;