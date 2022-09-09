import React from 'react';

const Footer = () => {
    return (
        <>
        
            <section className="footer">
                <div className="footer-map">
                    <ul>
                        <li>Sayt haqida</li>
                        <li>RSS</li>
                        <li>Bizning jamoa</li>
                    </ul>

                </div>
                <div className="footer-bottom">
                    <p>TATU Qarshi filiali materiallaridan foydalanganda, ushbu resursga havola etilishi shart</p>
                    <div className="media-icons">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-copy">
                    &copy; 2019 - 2022 | Barcha huquqlar himoya qilingan. Barcha xizmatlar litsenziyalangan
                </div>
            </section>
        </>
    );
};

export default Footer;