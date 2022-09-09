import React from 'react';

const HomeVideo = () => {
    return (
        // <div className='videoGallery w-100 h-auto p-2 ms-3' >
        //     <div className="news ms-5">
        //         <p className="news-text">Video galereya</p>
        //     </div>
        //     <div className="videoWrapper container w-100 h-auto d-flex flex-xl-row flex-lg-row flex-column">
        //         <div className="videoGroupArea h-auto d-flex justify-content-center flex-wrap">
        //             <div className="card m-2 miniVideos p-2">
        //                 <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                 <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
        //             </div>
        //             <div className="card m-2 miniVideos p-2">
        //                 <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                 <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
        //             </div>
        //             <div className="card m-2 miniVideos p-2">
        //                 <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                 <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
        //             </div>
        //             <div className="card m-2 miniVideos p-2">
        //                 <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                 <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
        //             </div>
        //         </div>
        //         <div className="mainVideoArea h-auto d-flex justify-content-center align-items-center">
        //             <div className="card m-2 mainVideo p-2">
        //                 <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                 <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div class="card-content">
            <div class="news">
                <p class="news-text">Video galereya</p>
            </div>
            <div class="containers">
                <div class="left-side">
                    <div class="left-card card">
                        <div class="img-top w-10">
                            {/* <!-- <img src="../img/foto1.jpg" width="100%" alt="" /> --> */}
                            {/* <video src="https://youtu.be/DFp1n-xt_Ro" width="100%" height="auto" controls>
                                <source src="https://youtu.be/DFp1n-xt_Ro"/>
                            </video> */}
                            <iframe width="100%" height="85%" src="https://www.youtube.com/embed/DFp1n-xt_Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-title">
                                Lorem, ipsum dolor sit amet consectetur. Atque, tenetur?
                            </div>
                        </div>
                    </div>
                    <div class="left-card card">
                    <iframe width="100%" height="85%" src="https://www.youtube.com/embed/DFp1n-xt_Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <div class="card-title">
                            Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt
                            porro?
                        </div>
                    </div>
                    <div class="left-card card">
                    <iframe width="100%" height="85%" src="https://www.youtube.com/embed/DFp1n-xt_Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <div class="card-title">
                            Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt
                            porro?
                        </div>
                    </div>
                    <div class="left-card card">
                    <iframe width="100%" height="85%" src="https://www.youtube.com/embed/DFp1n-xt_Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <div class="card-title">
                            Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt
                            porro?
                        </div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="card w-100">
                        {/* <video src='https://youtu.be/DFp1n-xt_Ro' width="100%" height="426px" controls>
                            <source src="https://youtu.be/JHDsVEk6R60" type="video/mp4"/>
                        </video> */}
                        {/* <iframe width="100%" height="426px" src="https://www.youtube.com/embed/DFp1n-xt_Ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        <iframe width="100%" height="426px" src="https://www.youtube.com/embed/NPkhbYWTvu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="card-title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimus veniam laborum saepe Lorem ipsum dolor sit..
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;