import React from 'react';
import CardNews from '../components/layouts/CardNews';
import HeadNavbar from '../components/assets/HeadNavbar';

const Useful = () => {
    return (
        <>
            <HeadNavbar />
            <section className="inform-content">
                <div className="container">
                    <div className="inform-content">

                        <div className="information-container">
                            <div className="information">
                                <div className="inform-path">
                                    <span className="path-head path">Bosh sahifa</span><span className="path">/</span>
                                    <span className="path">Rahbariyat</span>
                                </div>
                                <h2>Rahbariyat</h2>

                                <CardNews/>

                                
                            </div>
                            <div className="sidebar">
                                <div className="list-group">
                                    <button type="button" className="list-group-item text-center list-group-item-action " aria-current="true">
                                        Xizmatlar
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="bi bi-people-fill"></i>Interaktiv xizmatlar</button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="bi bi-people-fill"></i>Rahbariyat</button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="bi bi-people-fill"></i>Ta'lim yo'nalishlari</button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="bi bi-people-fill"></i>Iqtidorli talabalar</button>
                                    <button type="button" className="list-group-item list-group-item-action"><i
                                        className="bi bi-people-fill"></i>Tizim</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
};

export default Useful;