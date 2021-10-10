import React from 'react';
import Header from '../../components/home/header/Header';
import MakeAppointment from '../../components/home/makeAppointment/MakeAppointment';
import Services from '../../components/home/services/Services';
import FeaturedService from '../../components/home/featuredService/FeaturedService';
import Testimonials from '../../components/home/testimonials/Testimonials';
import Blogs from '../../components/home/blogs/Blogs';
import Doctors from '../../components/home/doctors/Doctors';
import Contact from '../../components/home/contact/Contact';
import Footer from '../../components/shared/footer/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
            <div className="pb-5 pe-5 fixed-bottom go-up" ><a href="#headerMain"><FontAwesomeIcon className="upIcon" icon={faArrowCircleUp} /></a></div>
        </div>
    );
};

export default Home;