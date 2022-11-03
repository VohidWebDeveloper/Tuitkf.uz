import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'jquery'
import edu5 from '../../img/edu5.jpg';
import edu2 from '../../img/edu2.jpg';
import edu6 from '../../img/edu6.jpg';
import edu4 from '../../img/edu4.jpg';
import '../../styles/homeNews.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const HomeNews = () => {
    const [data, setData] = useState([{}]);
    
    const {t} = useTranslation("common")

    useEffect(() => {
        axios.get('https://rest.tuitkf.uz/v1/news')
            .then(response => setData(response.data.items))
            .catch(err => console.log(err))
    }, [])

    // console.log(data);
    return (
        <>
            <div className="main-content">
                <div className="news">
                    <p className="news-text">{t("news.title")}</p>
                </div>

                <div className="newCard-group">
                    {data.map((item,index) => (
                        <Link to={`/views/view/${item.id}`} key={index} className="newCard-item">
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

            </div>
        </>
    );
};

export default HomeNews;