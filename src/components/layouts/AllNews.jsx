import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllNews = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://rest.tuitkf.uz/v1/news')
      .then(res => setData(res.data.items))
      .catch(err => console.log(err))
    }, [])




    return (
        <>
            <div className="newCard-group">
                {data.map((item, index) => (
                    <Link to={`/views/view/${item.id}`} key={item.id} className="newCard-item">
                        <div className="new-top">
                            <div className="shodof"></div>
                            <img src={item.image} alt="foto" />
                        </div>
                        <div className="new-bottom">
                            <div className="new-name">{item.name}</div>
                            <div className="newBottom-date">
                                <div className="neww">Yangiliklar</div>
                                <div className="newd">{item.created_at}</div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </>
    );
};

export default AllNews;