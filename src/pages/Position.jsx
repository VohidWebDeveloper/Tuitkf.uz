import React from 'react';
import '../styles/rahbariyat.css';
import Persons from '../components/layouts/Persons';

import HeadNavbar from '../components/assets/HeadNavbar';
import { Outlet, useParams } from 'react-router-dom';


// const person = [
//     {
//         id: 1,
//         img: person3,
//         flName: "RAXMATOV FURQAT ABDIRAZZOQOVICH",
//         email: "info@tuitkf.uz",
//         phone: "+998752280232",
//         job: "Direktor"
//     },
//     {
//         id: 2,
//         img: person3,
//         flName: "AMANOV OTABEK AMANKULOVICH",
//         email: "amanov@tuitkf.uz",
//         phone: "(75) 228-02-32",
//         job: "Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha direktorning birinchi o‘rinbosari"
//     },
//     {
//         id: 3,
//         img: person3,
//         flName: "MUXAMMADIYEV ANVAR KARIMOVICH",
//         email: "muxammadiyev@tuitkf.uz",
//         phone: "(75) 228-10-26",
//         job: "O‘quv ishlar bo‘yicha direktor o‘rinbosari"
//     },
//     {
//         id: 4,
//         img: person1,
//         flName: "SHERBOBOYEVA GULRUH BAXTIYOROVNA",
//         email: "sherboboyeva@tuitkf.uz",
//         phone: "(75) 228 10 28",
//         job: " Ilmiy ishlar va innovatsiyalar bo‘yicha direktor o‘rinbosari"
//     },
// ]

const Position = () => {
    const {title} = useParams()
    return (
        <>
            <HeadNavbar />
            <section class="inform-content">
                <div class="container">
                    <div class="inform-content">

                        <div class="information-container">
                            <div class="information">
                                <div class="inform-path">
                                    <span class="path-head path">Bosh sahifa</span><span class="path">/</span>
                                    <span class="path">{}</span>
                                </div>
                                


                                <Outlet/>
                                


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