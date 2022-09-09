import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Position from './pages/Position';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/rahbariyat' element={<Position/>}/>
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;