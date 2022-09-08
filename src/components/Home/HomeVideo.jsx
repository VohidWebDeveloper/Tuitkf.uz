import React from 'react';

const HomeVideo = () => {
    return (
        <div className='videoGallery w-100 h-auto p-2 ms-3' >
             <div className="news ms-5">
                    <p className="news-text">Foto galereya</p>
                </div>
            <div className="videoWrapper container w-100 h-auto d-flex flex-xl-row flex-lg-row flex-column">
                <div className="videoGroupArea h-auto d-flex justify-content-center flex-wrap">
                    <div className="card m-2 miniVideos p-2">
                    <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
                    </div>
                    <div className="card m-2 miniVideos p-2">
                    <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
                    </div>
                    <div className="card m-2 miniVideos p-2">
                    <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
                    </div>
                    <div className="card m-2 miniVideos p-2">
                    <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
                    </div>
                </div>
                <div className="mainVideoArea h-auto d-flex justify-content-center align-items-center">
                    <div className="card m-2 mainVideo p-2">
                    <iframe width="100%" height="70%" src="https://www.youtube.com/embed/-ifqvOBsfgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Lorem ipsum dolor sit amet. Eligendi aperiam eaque nesciunt porro?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;