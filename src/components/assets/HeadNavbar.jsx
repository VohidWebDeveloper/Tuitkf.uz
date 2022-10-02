import React from 'react';
import gerb from '../../img/gerb.png';
import music from '../../img/music.png';
import flag from '../../img/flag.jpg';
import Navbar from './Navbar';

const HeadNavbar = () => {
    return (
        <>
            <div id='0' className="head-nav">
                    <div className="top-nav">
                        <div className="media-icons">
                            <a href="https://www.facebook.com/tuitkf"><i className="bi bi-facebook"></i></a>
                            <a href="https://t.me/tuitkf_uz"><i className="bi bi-telegram"></i></a>
                            <a href="https://instagram.com/tuitkf.official?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCavGevCmtSrnfGVtAOTRsPQ"><i className="bi bi-youtube"></i></a>
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
        </>
    );
};

export default HeadNavbar;