import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
                <BusinessInfo></BusinessInfo>
            </div>
        </div>
    );
};

export default Header;