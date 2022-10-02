import React from 'react';

const Persons = ({data}) => {

    console.log(data);
    return (
        <>
        <h1>Rahbariyat</h1>
            {data.map((data) => (
                <div class="person-content">
                    <div class="person-image">
                        <img src={data.img} alt="he is senator" width="100%" height="100%" />
                    </div>
                    <div class="person-about">
                        <p class="person-position">{data.job}</p>
                        <p class="person-name">{data.flName}</p>
                        <p class="person-email"><span class="e-name">E-pochta:</span> {data.email}</p>
                        <p class="person-email"><span class="e-name">Telefon raqami:</span> {data.phone}</p>
                        <div class="person-btns">
                            <div class="btn btn-info text-white ">Tarjimai hol</div>
                            <div class="btn btn-info text-white mx-2">Majburiyatlari</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Persons;