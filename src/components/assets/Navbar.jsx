import React from 'react';
import '../../styles/home.css'

const Navbar = () => {
    return (
        <>
            <div className="bottom-nav">
                        <i className='bi bi-list'></i>
                        <div className="logotip">
                            <div className="logo"></div>
                            <div className="logo-name">
                                Toshkent Axborot Texnologiyalari Universiteti Qarshi filiali
                            </div>
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
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Login Forms</a></li>
                                        <li><a href="#">Card Design</a></li>
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
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Login Forms</a></li>
                                        <li><a href="#">Card Design</a></li>
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
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Login Forms</a></li>
                                        <li><a href="#">Card Design</a></li>
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
                                    <a className="one-a" href="#">ABITURIYENT</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Login Forms</a></li>
                                        <li><a href="#">Card Design</a></li>
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
                                    <a className="one-a" href="#">FAOLIYAT</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Login Forms</a></li>
                                        <li><a href="#">Card Design</a></li>
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