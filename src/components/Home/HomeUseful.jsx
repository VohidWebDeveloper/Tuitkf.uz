import React from 'react';
import use8 from '../../img/use8.png'
import use7 from '../../img/use7.png'
import use6 from '../../img/use6.png'
import use5 from '../../img/use5.png'
import use1 from '../../img/use1.png'
import use3 from '../../img/use3.png'
import use4 from '../../img/use4.png'
import use11 from '../../img/use11.jpg'

const usefulContent = [
    {
        id: 1,
        useImg: use8,
        useTitle: "O'zbekiston Respublikasi Prezidentining resmiy veb-sayti"
    },
    {
        id: 2,
        useImg: use7,
        useTitle: "O'zbekiston Respublikasi Oliy Majlisi Senati"
    },
    {
        id: 3,
        useImg: use6,
        useTitle: "O'zbekiston Respublikasi Hukumat portali"
    },
    {
        id: 4,
        useImg: use5,
        useTitle: "O'zbekiston Respublikasi Oliy Majlis Qonunchilik Palatasi"
    },
    {
        id: 5,
        useImg: use1,
        useTitle: "O'zbekiston Respublikasi Prezidentining virtual qabulxonasi"
    },
    {
        id: 6,
        useImg: use3,
        useTitle: "O'zbekiston Respublikasi davlat dasturlar portali"
    },
    {
        id: 7,
        useImg: use4,
        useTitle: "Yagona interaktiv davlat xizmatlari portali"
    },
    {
        id: 8,
        useImg: use11,
        useTitle: "O'zbekiston Respublikasi ochiq budjet portali"
    },
]

const HomeUseful = () => {
    return (
        <>
            <div className="useful-content">
                <div className="news">
                    <p className="news-text">Foydali sahifalar</p>
                </div>
                <div className="use-contents">


                    {usefulContent.map((data) => (
                        <div className="useItem ">
                            <div className="img-top"><img src={data.useImg} width="100%" alt="" /></div>
                            <div className="card-title text-center p-2">{data.useTitle}
                            </div>
                        </div>
                    )
                    )}


                </div>
            </div>
        </>
    );
};

export default HomeUseful;