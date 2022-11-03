import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation("common")
    return (
        <>
        
            <section className="footer">
                <div className="footer-map">
                    <ul>
                        <li>{t("footer.about")}</li>
                        <li>{t("footer.rss")}</li>
                        <li>{t("footer.ourTeam")}</li>
                    </ul>

                </div>
                <div className="footer-bottom">
                    <p>{t("footer.text")}</p>
                    <div className="media-icons">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-copy">
                    &copy; 2019 - 2022 | {t("footer.footBottom")}
                </div>
            </section>
        </>
    );
};

export default Footer;