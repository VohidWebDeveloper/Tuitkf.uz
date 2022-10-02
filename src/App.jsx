import React, {useEffect,useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Position from './pages/Position';
import Useful from './pages/Useful';
import Persons from './components/layouts/Persons';
import person3 from './img/person3.jpg';
import person1 from './img/person1.jpg';
import CardNews from './components/layouts/CardNews';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import NewElement from './components/layouts/NewElement';
import AllNews from './components/layouts/AllNews';



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
];


const languages = [
    {
      code: 'uz',
      name: 'Uzbek',
      country_code: 'uz'
    },
    {
      code: 'en',
      name: 'Enlish',
      country_code: 'en'
    },
    {
      code: 'ru',
      name: 'Rus',
      country_code: 'ru'
    }
  ]


const App = () => {
        const [data, setData] = useState([]);

        // const { t } = useTranslation();
        // const currentLanguageCode = Cookies.get('118next') || 'ru';
        // const [lng, setLng] = useState(currentLanguageCode);
        // const currentLanguage = languages.find(l => l.code ===currentLanguageCode);
        // const releaseDate = new Date('2022-09-26')
        // const timeDifference = new Date() - releaseDate;
        // const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // const {id} = useParams;
        // const number_type = [
        //   {
        //     id: 1,
        //     name: "nums"
        //   }
        // ]
      
        // useEffect(() => {
        //   document.title = `Tuitkf`+t('name')
        //   axios.get('https://rest.tuitkf.uz/v1/news')
        //     .then(response =>{setData(response.items);
        //     console.log(response.data);} )
        //     .catch(err => err)
        // }, [currentLanguage,t])
      
      
    
    return (
        <>
            <BrowserRouter>
                {/* <Header /> */}
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/views' element={<Position/>}/>
                        <Route path='/views' element={<Position/>}>
                            <Route path='/views/rahbariyat' element={<Persons data = {person} key={person.data}/>}/>
                            <Route path='/views/useful' element={<CardNews/>}/>
                            <Route path='/views/allNews' element={<AllNews/>}>
                                <Route path='/views/allNews/view/:id' element={<NewElement/>}/>
                            </Route>
                            <Route path='/views/view/:id' element={<NewElement data={data}/>}/>
                        </Route>
                        {/* <Route path='/useful' element={<Useful/>}/> */}

                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;