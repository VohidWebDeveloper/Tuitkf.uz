import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.css'

const Navbar = () => {
    return (
        <>
            <div className="bottom-nav">
                        <i className='bi bi-list'></i>
                        <div className="logotip">
                            <div className="logo"></div>
                            <Link to={'/'} className="logo-name">
                                Toshkent Axborot Texnologiyalari Universiteti Qarshi filiali
                            </Link>
                        </div>

                        <div className="nav-links">
                            <div className="sidebar-logo">
                                <span className="logo-name">CodingLab</span>
                                <i className='bx bx-x'></i>
                            </div>

                            <ul className="links">
                                <li className="link-li">
                                    <a className="one-a" href="#">YANGILIKLAR</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><Link to={'/views/rahbariyat'} href="#">Rahbariyat</Link></li>
                                        <li><Link to={'/views/allNews'} href="#">Ommaviy tadbirlar</Link></li>
                                        <li className="more">
                                            <span><a href="#">More</a>
                                                <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                            </span>
                                            <ul className="more-sub-menu sub-menu">
                                                <li><a href="#">Neumorphism</a></li>
                                                <li><a href="#">Pre-loader</a></li>
                                                <li><a href="#">Glassmorphism</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="link-li">
                                    <a className="one-a" href="#">TUZILMA</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">Filial tizimi</a></li>
                                        <li><a href="#">Filial tarixi</a></li>
                                        <li><a href="#">Bo'limlar</a></li>
                                        <li><a href="#">Markazlar</a></li>
                                        <li><a href="#">Fakultetlar</a></li>
                                        <li className="more">
                                            <span><a href="#">More</a>
                                                <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                            </span>
                                            <ul className="more-sub-menu sub-menu">
                                                <li><a href="#">Neumorphism</a></li>
                                                <li><a href="#">Pre-loader</a></li>
                                                <li><a href="#">Glassmorphism</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="link-li">
                                    <a className="one-a" href="#">INTERAKTIV XIZMAT</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">Ilmiy faoliyat</a></li>
                                        <li><a href="#">Xalqaro faoliyat</a></li>
                                        {/* <li><a href="#">Card Design</a></li> */}
                                        <li className="more">
                                            <span><a href="#">Moliyaviy faoliyat</a>
                                                <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                            </span>
                                            <ul className="more-sub-menu sub-menu">
                                                <li><a href="#">Marketing</a></li>
                                                <li><a href="#">Bugalteriya</a></li>
                                                <li><a href="#">Bitiruvchilar monitoringi</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="link-li">
                                    <a className="one-a" href="#">ABITURIYENT</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">Bakalavriant</a></li>
                                        <li><a href="#">Magistratura</a></li>
                                        <li><a href="#">Ikkinchi oliy ta'lim</a></li>
                                        <li className="more">
                                            <span><a href="#">Texnikum bitiruvchilari</a>
                                                <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                            </span>
                                            <ul className="more-sub-menu sub-menu">
                                                <li><a href="#">Suhbat jarayoni grafigi</a></li>
                                                <li><a href="#">Baholash mezoni</a></li>
                                                <li><a href="#">Suhbat natijalari</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="link-li">
                                    <a className="one-a" href="#">FAOLIYAT</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">Ilmiy faoliyat</a></li>
                                        <li><a href="#">Xalaqaro faoliyat</a></li>
                                        <li><a href="#"> Moliyaviy faoliyat</a></li>
                                    </ul>
                                </li>

                                <li className="link-li">
                                    <a className="one-a" href="#">ALOQA</a>

                                </li>

                            </ul>


                        </div>
                    </div>
        </>
    );
};

export default Navbar;