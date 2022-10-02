import React, { useState } from 'react';
import Header from '../components/Header';
import HomeGallery from '../components/Home/HomeGallery';
import HomeMain from '../components/Home/HomeMain';
import HomeNews from '../components/Home/HomeNews';
import HomeStatics from '../components/Home/HomeStatics';
import HomeUseful from '../components/Home/HomeUseful';
import HomeVideo from '../components/Home/HomeVideo';
// import { LordIconn } from '../components/Home/LordIconn';
const Home = () => {

    window.addEventListener('scroll' , function () {
        const top = this.document.querySelector('.top')
        if (window.scrollY > 100) {
            top.style.transform = 'translateY(0)';
            top.style.transition = 'all 0.5s ease'
        }
        else {
            top.style.transform = 'translateY(70px)';
            top.style.transition = 'all 0.5s ease'

        }
    })


    return (
        <>
            {/* <layoutNavbar/> */}
            <Header />
            <a href='#0' className="top">
                <i className="bi bi-arrow-up"></i>
            </a>
            <div className="main">
                <div className="row"><HomeMain /></div>
                <div className="row"><HomeNews /></div>
                <div className="row"><HomeGallery /></div>
                <div className="row"><HomeVideo /></div>
                <div className="row"><HomeStatics /></div>
                <div className="row"><HomeUseful /></div>
                {/* <div className="row"><LordIconn/></div> */}
            </div>
        </>
    );
};

export default Home;