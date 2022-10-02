import React, { useState } from 'react';
import '../../styles/home.css';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import more1 from '../../img/more1.png'
import more2 from '../../img/more2.png'
import more3 from '../../img/more3.png'
import more4 from '../../img/more4.png'
import more5 from '../../img/more5.png'
import more6 from '../../img/more6.png'
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

defineLordIconElement(loadAnimation);

const main = [
    {
        id: 1,
        icon: "<lord-icon style= {{height: '200px', width: '200px'}} className='lord-icon' src='https://cdn.lordicon.com/gqdnbnwt.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 2,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/wxnxiano.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "ARM Markazi"
    },
    {
        id: 3,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/eszyyflr.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Dasturchilar markazi"
    },
    {
        id: 4,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/gqdnbnwt.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 5,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/zpxybbhl.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 6,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/wxnxiano.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 7,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/nkmsrxys.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 8,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/yalwfksd.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 9,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/nocovwne.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 10,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/yalwfksd.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 11,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/gqdnbnwt.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
    {
        id: 12,
        icon: "<lord-icon style= {{height: '100px', width: '100px'}} className='lord-icon' src='https://cdn.lordicon.com/gqdnbnwt.json' trigger='morph' colors='primary:#ebd10f,secondary:#8FBCFF' delay='0'></lord-icon>",
        title: "Hemis tizimi"
    },
]



const HomeMain = () => {

    const [show, setShow] = useState(false);
    const lordIcon = document.querySelector('.lord-icon');


    return (

        <>
            <div className="icons-content container">
                <div className="news">
                    <p className="news-text">Asosiy yo'nalishlar</p>
                </div>
                <div className={`icon-container ${show ? "" : 'closes'}`}>
                    {main.map(item => (
                        <div className="icon-item card m-1">
                            <div className="img-top" >
                                {parse(item.icon, {
                                    htmlparser2: {
                                        xmlMode: true
                                    }
                                })}
                            </div>
                            <div className="card-title p-2">{item.title}</div>
                        </div>
                    ))}
                    {/* <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/eszyyflr.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/nocovwne.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} className="lord-icon" src="https://cdn.lordicon.com/gqdnbnwt.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/zpxybbhl.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/wxnxiano.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/nkmsrxys.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/tdxypxgp.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/yalwfksd.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/nocovwne.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/yalwfksd.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div>
                    <div className="icon-item card m-1">
                        <div className="img-top">
                            <lord-icon style={{ height: "100px", width: "100px" }} src="https://cdn.lordicon.com/yalwfksd.json" trigger="morph"
                                colors="primary:#ebd10f,secondary:#8FBCFF" delay="0">
                            </lord-icon>
                        </div>
                        <div className="card-title p-2">Books</div>
                    </div> */}

                </div>
                <div className="koproq btn btn-outline-primary mx-auto px-4" onClick={() => {
                    setShow(!show)
                }} >{show ? "Kamroq" : "Ko'proq"}</div>
            </div>
        </>
    );
};

export default HomeMain;