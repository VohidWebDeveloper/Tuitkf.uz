import React from 'react';
import '../../styles/home.css'


const counters = document.querySelectorAll(".counter");
// Main function
for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute("data-target");
        const count = +n.innerText;
        const speed = 100; // change animation speed here
        const inc = target / speed;
        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            n.innerText = target;
        }
    };
    updateCount();
}





const HomeStatics = () => {
    return (
        <>
            <div className="statics-content">

                <div className="statica">
                    <div className="statics-item m-2">
                        <div className="statics-icon"><i className="bi bi-people"></i></div>
                        <div className="counter text-white m-4 text-center" data-target="77">77</div>
                        <div className="text m-4 text-white text-center">Professsor o'qituvchilar</div>
                    </div>
                    <div className="statics-item m-2">
                        <div className="statics-icon"><i className="bi bi-people"></i></div>
                        <div className="counter text-white m-4 text-center" data-target="2021">2021</div>
                        <div className="text m-4 text-white text-center">Talabalar soni</div>
                    </div>
                    <div className="statics-item m-2">
                        <div className="statics-icon"><i className="bi bi-diagram-3"></i></div>
                        <div className="counter text-white m-4 text-center" data-target="2">2</div>
                        <div className="text m-4 text-white text-center">Fakultetlar soni</div>
                    </div>
                    <div className="statics-item m-2">
                        <div className="statics-icon"><i className="bi bi-bezier"></i></div>
                        <div className="counter text-white m-4 text-center" data-target="7">7</div>
                        <div className="text m-4 text-white text-center">Kafedralar soni</div>
                    </div>
                    <div className="statics-item m-2">
                        <div className="statics-icon"><i className="bi bi-diagram-3"></i></div>
                        <div className="counter text-white m-4 text-center" data-target="7">7</div>
                        <div className="text m-4 text-white text-center">Bakalavr yo'nalishlari</div>
                    </div>
                    <div className="statics-item m-2">
                        <div className="statics-icon"><i className="bi bi-people"></i></div>
                        <div className="counter text-white m-4 text-center" data-target="2">2</div>
                        <div className="text m-4 text-white text-center">Magistr yo'nalishlari</div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HomeStatics;