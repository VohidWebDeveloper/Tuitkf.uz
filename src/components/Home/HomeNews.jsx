import React from 'react';
import edu5 from '../../img/edu5.jpg';
import edu2 from '../../img/edu2.jpg';
import edu6 from '../../img/edu6.jpg';
import edu4 from '../../img/edu4.jpg';


$(".carousel").owlCarousel({
    loop: true,
    margin: 25,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items:2,
      },
      600: {
        items: 2,
      },
      992: {
        items:4,
      },
      1000: {
        items: 4,
      },
    },
  });

const HomeNews = () => {
    return (
        <>
            <div className="main-content">
                <div className="news">
                    <p className="news-text">Yangiliklar</p>
                </div>


                <div className="wrapper">
                    <div className="carousel owl-carousel">
                        <div className="function" id="c1">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">

                                <img src={edu5} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                        <div className="function" id="c2">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu2} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                        <div className="function" id="c2">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu6} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                        <div className="function" id="c2">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu4} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                        <div className="function" id="c3">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu5} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                        <div className="function" id="c4">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu6} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                        <div className="function" id="c5">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu4} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>

                        <div className="function" id="c5">
                            <div className="card-title">
                                <span className="name"><i className="bi bi-alarm"></i> 23:47, 19 Aprel 2022</span>
                                <span><i className="fas fa-ellipsis-v"></i></span>
                            </div>
                            <div className="card-logo">
                                <img src={edu6} width="100%" height="100%" alt="" />
                            </div>
                            <div className="coins">
                                <h2>Yahshil makon loyihasi</h2>
                                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, temporibus. Lorem ipsum
                                    dolor sit amet.</h5>
                                <button className="btn btn-outline-dark">Ko'proq</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeNews;