import React from 'react';
import './Header.css'
import HeaderMain from '../headerMain/HeaderMain'
import BusinessInfo from '../businessInfo/BusinessInfo';
import Navbar from '../../shared/navbar/Navbar';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;