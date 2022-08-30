import React from 'react';
import gerb from '../img/gerb.png';
import music from '../img/music.png';
import flag from '../img/flag.jpg';
import '../styles/home.css'
import Navbar from './assets/Navbar';

const Header = () => {
    return (
        <>
            <div className="bg-image"></div>
            <div className="header">
                <div className="head-nav">
                    <div className="top-nav">
                        <div className="media-icons">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                        </div>
                        <div className="call-me">
                            <div className="tel phone"><i className="bi bi-telephone"></i> Ishonch telefon: 4112</div>
                            <div className="tel devon"><i className="bi bi-envelope-fill"></i> Elektron pochta: info@tuitkf.uz</div>
                        </div>
                        <div className="symbols">
                            <div className="sign"><img src={gerb} width="100%" alt="" /></div>
                            <div className="sign"><img src={music} width="65%" alt="" /></div>
                            <div className="sign"><img src={flag} width="100%" alt="" /></div>
                        </div>
                        <div className="language">
                            <select className="form-select" name="language" id="">
                                <option className="form-control" value="1">Uz</option>
                                <option className="form-control" value="2">Ru</option>
                                <option className="form-control" value="3">Eng</option>
                            </select>
                        </div>
                        <div className="temperature">
                            <i className="bi bi-thermometer-half"></i>16°C
                        </div>

                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <div className="logo"></div>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            YANGILIKLAR
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            TUZILMA
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            INTERAKTIV XIZMAT
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            ABITURIYENT
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            FAOLIYAT
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Navbar/>
                </div>


                <div className="bg-text">
                    <p className="ins-name">
                        TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI QARSHI FILIALI RASMIY
                        VEB SAYTI
                    </p>
                    <div className="buttons d-flex justify-content-between">
                        <div className="btn w-50 btn-outline-light px-2">
                            Ko'proq
                        </div>
                    </div>
                </div>


                <div data-bs-toggle="modal" data-bs-target="#exampleModal" className=" modals"><i className="bi bi-chat-right"></i>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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