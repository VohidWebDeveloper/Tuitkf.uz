import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import HeadNavbar from './assets/HeadNavbar';

const Header = () => {
    return (
        <>
            <div className="bg-image"></div>
            <div className="header">
                
                <HeadNavbar/>

                <div className="bg-text">
                    <p className="ins-name">
                        TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI QARSHI FILIALI RASMIY
                        VEB SAYTI
                    </p>
                    <div className="buttons d-flex justify-content-between">
                        <Link to={'/views/'} className="header-btn btn w-50 btn-outline-light px-2">
                            Ko'proq
                        </Link>
                    </div>
                </div>


                <div data-bs-toggle="modal" data-bs-target="#exampleModal" className=" modals"><i className="bi bi-chat-right"></i>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Taklif va muammolar</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="email" className="form-control" placeholder="Email..." /><br />
                                <input type="text" className="form-control" placeholder="Your name..." /><br />
                                <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yopish</button>
                                <button type="button" className="btn btn-primary">Yuborish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;