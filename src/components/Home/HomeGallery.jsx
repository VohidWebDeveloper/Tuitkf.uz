import axios from 'axios';
import React, { useState, useEffect } from 'react';




const HomeGallery = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const getImg = (src) => {
        setData(src)
        setModal(true)
    }


    useEffect(() => {
        axios.get('https://rest.tuitkf.uz/v1/default/home')
            .then(res => setData(res.data.foto))
            .catch(err => console.log(err))
    }, [])

    console.log(data);
    const imgs = [
        "https://cdn.pixabay.com/photo/2022/08/19/01/06/ferris-wheel-7395944_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/08/19/01/06/ferris-wheel-7395944_960_720.jpg",
        "https://images.unsplash.com/photo-1653579636217-0a062a1390ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ]
    return (
        <>
            <div className="slide-content">
                <div className="news">
                    <p className="news-text">Foto galereya</p>
                </div>
                {/* modal start */}
                {/* <div className={modal ? "modal w-100 100vh d-block text-end modalWindow" : "modal w-100 h-100vh  bg-secondary modalWindow"}>
                    <div className='senseModal w-100 h-100' onClick={() => setModal(false)}>
                        <button type="button" className="btn-close btn-close-white me-4 mt-3" aria-label="Close" onClick={() => setModal(false)}></button>
                        <img src={img} alt="img" className='mx-auto d-block h-75 mt-5 modal-img' />
                    </div>
                </div> */}
                {/* modal end */}
                {/* cards block start */}
                <div className="mx-2 row d-flex rasm flex-wrap align-items-center justify-content-center">
                    {data.map((item) => (
                        <div key={item.id} className="m-xl-3 m-2 photo-card d-flex align-items-center">
                            <img src={item._url} className='card-img rounded my-2'  />
                        </div>
                    ))}
                </div>
                {/* cards block end */}

            </div>
        </>
    );
};

export default HomeGallery;