import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../../styles/home.css'

const Navbar = () => {

    const {t} = useTranslation("common")
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
                                    <a className="one-a" href="#">{t('navbar.navs.news.yangilik')}</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><Link to={'/views/rahbariyat'} href="#">{t('navbar.navs.news.rahbariyat')}</Link></li>
                                        <li><Link to={'/views/allNews'} href="#">{t('navbar.navs.news.tadbir')}</Link></li>
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
                                    <a className="one-a" href="#">{t("navbar.navs.tuzilma.tuzilma")}</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">{t("navbar.navs.tuzilma.tizim")}</a></li>
                                        <li><a href="#">{t("navbar.navs.tuzilma.tarix")}</a></li>
                                        <li><a href="#">{t("navbar.navs.tuzilma.tarix")}</a></li>
                                        <li><a href="#">{t("navbar.navs.tuzilma.bolim")}</a></li>
                                        <li><a href="#">{t("navbar.navs.tuzilma.fakultet")}</a></li>
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
                                    <a className="one-a" href="#">{t("navbar.navs.xizmat.interaktiv")}</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">{t("navbar.navs.xizmat.ilmiy")}</a></li>
                                        <li><a href="#">{t("navbar.navs.xizmat.moliya")}</a></li>
                                        {/* <li><a href="#">Card Design</a></li> */}
                                        <li className="more">
                                            <span><a href="#">{t("navbar.navs.xizmat.moliyaMore")}</a>
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
                                    <a className="one-a" href="#">{t("navbar.navs.abituriyent.abituriyent")}</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">{t("navbar.navs.abituriyent.bakalavr")}</a></li>
                                        <li><a href="#">{t("navbar.navs.abituriyent.magistr")}</a></li>
                                        <li><a href="#">{t("navbar.navs.abituriyent.oliy")}</a></li>
                                        <li className="more">
                                            <span><a href="#">{t("navbar.navs.abituriyent.suhbats.texnikum")}</a>
                                                <i className='bx bxs-chevron-right arrow more-arrow'></i>
                                            </span>
                                            <ul className="more-sub-menu sub-menu">
                                                <li><a href="#">{t("navbar.navs.abituriyent.suhbats.suhbat")}</a></li>
                                                <li><a href="#">{t("navbar.navs.abituriyent.suhbats.mezon")}</a></li>
                                                <li><a href="#">{t("navbar.navs.abituriyent.suhbats.natija")}</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="link-li">
                                    <a className="one-a" href="#">{t("navbar.navs.faoliyat.faol")}</a>
                                    <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                    <ul className="htmlCss-sub-menu sub-menu">
                                        <li><a href="#">{t("navbar.navs.faoliyat.ilmiy")}</a></li>
                                        <li><a href="#">{t("navbar.navs.faoliyat.xalqaro")}</a></li>
                                        <li><a href="#"> {t("navbar.navs.faoliyat.moliya")}</a></li>
                                    </ul>
                                </li>

                                <li className="link-li">
                                    <a className="one-a" href="#">{t("navbar.navs.aloqa")}</a>

                                </li>

                            </ul>


                        </div>
                    </div>
        </>
    );
};

export default Navbar;