import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../styles/videoElement.css';
import getVideoId from 'get-video-id';
import vid1 from '../../img/conferensia1.jpg'
import vid2 from '../../img/conferensia2.jpg'
import vid3 from '../../img/conferensia3.jpg'
import vid4 from '../../img/conferensia4.jpg'

//   https://img.youtube.com/vi/yourid/sddefault.jpg


const HomeVideo = () => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);

    useEffect(() => {
        axios.get('https://rest.tuitkf.uz/v1/default/home')
            .then(res => setData(res.data.video))
            .catch(err => console.log(err))
    }, [])

    console.log(data);
    for (let i = 0; i < data.length; i++) {

        console.log(data[i]._url);

    }

    var urls = [
        'https://youtube.com/shorts/dQw4w9WgXcQ?feature=share',
        '//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0',
        'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo',
        'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
        'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
        'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
        'http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY',
        'http://youtu.be/6dwqZw0j_jY',
        'http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be',
        'http://youtu.be/afa-5HQHiAs',
        'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0',
        'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
        'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
        'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
        'http://www.youtube.com/embed/nas1rJpm7wY?rel=0',
        'http://www.youtube.com/watch?v=peFZbP64dsU',
        'http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player',
        'http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player',
        'http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
        'http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
        'http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
        'http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
        'http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
        'http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player'
    ];
    
    var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    
    for (i = 0; i < data.length; ++i) {
        r = urls[i].match(rx);
        console.log(r[1]);
    }
    // console.log(r[1]);


    // const url = d

    // const youTubeIdFromLink = (url) => url.match(/(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/)[1];



    function getClass(index) {
        return index === activeObject?.id ? "active" : "inactive";
    }

    // here className can not be "inactive" since Modal always shows activeObject
    const Modal = ({ object: { label, description } }) => (
        <div id="productModal" className="active">
            This is modal
            <h2>{label}</h2>
            <span className="description">{description}</span>
            <button onClick={() => setShowModal(false)}>Close me</button>
        </div>
    );



    return (
        <div className="card-content container">
            <div className="news">
                <p className="news-text">Video galereya</p>
            </div>
            <div className="containers">
                {data.map((item) => (
                    <a href={item._url} key={item.id} className="video-item">
                        <div className="video-center">

                        </div>
                        <div className="video-bottom">
                            <div className="video-name">
                                {item.name}
                            </div>
                            <div className="video-data">
                                <div className="video-time">12.10.2022</div>
                                <div className="video-logos">
                                    <i className="bi bi-telegram"></i>
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-instagram"></i>
                                </div>
                            </div>
                        </div>
                        <img src={vid4} alt="" />
                        <div className="shodow"></div>
                    </a>
                ))}


            </div>
        </div>
    );
};

export default HomeVideo;