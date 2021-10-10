import React from 'react';

const Navbar = () => {


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light container">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active ms-4" aria-current="page" href="/home" id="headerMain">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4" href="appointment">Appointment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4" href="#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 href='/home' ? text-white : text-secondary" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 text-white" href="dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 text-white" href="login">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;