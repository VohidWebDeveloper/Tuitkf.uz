import React from 'react';
import '../styles/rahbariyat.css';
import person3 from '../img/person3.jpg';
import person1 from '../img/person1.jpg';


const person = [
    {
        id: 1,
        img: person3,
        flName: "RAXMATOV FURQAT ABDIRAZZOQOVICH",
        email: "info@tuitkf.uz",
        phone: "+998752280232",
        job: "Direktor"
    },
    {
        id: 2,
        img: person3,
        flName: "AMANOV OTABEK AMANKULOVICH",
        email: "amanov@tuitkf.uz",
        phone: "(75) 228-02-32",
        job: "Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha direktorning birinchi o‘rinbosari"
    },
    {
        id: 3,
        img: person3,
        flName: "MUXAMMADIYEV ANVAR KARIMOVICH",
        email: "muxammadiyev@tuitkf.uz",
        phone: "(75) 228-10-26",
        job: "O‘quv ishlar bo‘yicha direktor o‘rinbosari"
    },
    {
        id: 4,
        img: person1,
        flName: "SHERBOBOYEVA GULRUH BAXTIYOROVNA",
        email: "sherboboyeva@tuitkf.uz",
        phone: "(75) 228 10 28",
        job: " Ilmiy ishlar va innovatsiyalar bo‘yicha direktor o‘rinbosari"
    },
]

const Position = () => {
    return (
        <>
        
            <section class="inform-content">
                <div class="container">
                    <div class="inform-content">

                        <div class="information-container">
                            <div class="information">
                                <div class="inform-path">
                                    <span class="path-head path">Bosh sahifa</span><span class="path">/</span>
                                    <span class="path">Rahbariyat</span>
                                </div>
                                <h2>Rahbariyat</h2>

                                {person.map((data) => (
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
                                
                                {/* <div class="person-content">
                                    <div class="person-image">
                                        <img src={person1} alt="he is senator" width="100%" height="100%" />
                                    </div>
                                    <div class="person-about">
                                        <p class="person-position">Direktor o'rinbosari</p>
                                        <p class="person-name">G'aniyev Davron Elomonovich</p>
                                        <p class="person-email"><span class="e-name">E-pochta:</span> abdurahmonovvohid2@gmail.com</p>
                                        <p class="person-email"><span class="e-name">Telefon raqami:</span> abdurahmonovvohid2@gmail.com</p>
                                        <div class="person-btns">
                                            <div class="btn btn-info text-white">Tarjimai hol</div>
                                            <div class="btn btn-info text-white mx-2">Majburiyatlari</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="person-content">
                                    <div class="person-image">
                                        <img src={person3} alt="he is senator" width="100%" height="100%" />
                                    </div>
                                    <div class="person-about">
                                        <p class="person-position">O'qituvchi</p>
                                        <p class="person-name">G'aniyev Davron Elomonovich</p>
                                        <p class="person-email"><span class="e-name">E-pochta:</span> abdurahmonovvohid2@gmail.com</p>
                                        <p class="person-email"><span class="e-name">Telefon raqami:</span> abdurahmonovvohid2@gmail.com</p>
                                        <div class="person-btns">
                                            <div class="btn text-white">Tarjimai hol</div>
                                            <div class="btn text-white mx-2">Majburiyatlari</div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div class="sidebar">
                                <div class="list-group">
                                    <button type="button" class="list-group-item text-center list-group-item-action " aria-current="true">
                                        Xizmatlar
                                    </button>
                                    <button type="button" class="list-group-item list-group-item-action"><i
                                        class="bi bi-people-fill"></i>Interaktiv xizmatlar</button>
                                    <button type="button" class="list-group-item list-group-item-action"><i
                                        class="bi bi-people-fill"></i>Rahbariyat</button>
                                    <button type="button" class="list-group-item list-group-item-action"><i
                                        class="bi bi-people-fill"></i>Ta'lim yo'nalishlari</button>
                                    <button type="button" class="list-group-item list-group-item-action"><i
                                        class="bi bi-people-fill"></i>Iqtidorli talabalar</button>
                                    <button type="button" class="list-group-item list-group-item-action"><i
                                        class="bi bi-people-fill"></i>Tizim</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
};

export default Position;