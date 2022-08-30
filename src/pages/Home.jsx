import React from 'react';
import HomeGallery from '../components/Home/HomeGallery';
import HomeMain from '../components/Home/HomeMain';
import HomeNews from '../components/Home/HomeNews';
import HomeStatics from '../components/Home/HomeStatics';
import HomeUseful from '../components/Home/HomeUseful';
import HomeVideo from '../components/Home/HomeVideo';
// import { LordIconn } from '../components/Home/LordIconn';

const Home = () => {
    return (
        <>
            <div className="main">
                <div className=""><HomeMain/></div>     
                <div className="row"><HomeNews/></div>     
                <div className="row"><HomeGallery/></div>     
                <div className="row"><HomeVideo/></div>     
                <div className="row"><HomeStatics/></div>    
                <div className="row"><HomeUseful/></div> 
                {/* <div className="row"><LordIconn/></div> */}
            </div>   
        </>
    );
};

export default Home;