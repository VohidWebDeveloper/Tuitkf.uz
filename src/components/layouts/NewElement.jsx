import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'


const NewElement = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://rest.tuitkf.uz/v1/news/view?id=${id}&expand=info,_translate`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])


    console.log(id);

    

    return (
        <>
            <div className="new-element">
                <img src={data.image} alt="" />

                <div className="new-body body py-4">
                    <div dangerouslySetInnerHTML={{__html: data.info}}></div>
                </div>
            </div>

        </>
    );
};

export default NewElement;