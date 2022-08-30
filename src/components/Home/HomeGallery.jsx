import React from 'react';
import p7 from '../../img/p7.jpg'
import p8 from '../../img/p8.jpg'
import person0 from '../../img/person0.jpg'
import person6 from '../../img/person6.jpg'

let closeBtn = document.querySelector('.closebtn');

// closeBtn.onclick = () => {

// }

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}




const HomeGallery = () => {
    return (
        <>
            <div className="slide-content">
                <div className="news">
                    <p className="news-text">Foto galereya</p>
                </div>
                <div className="grid-content">
                    <div className="row d-flex fotos-content">
                        <div className="border column col-sm-3 imgs">
                            <abbr title="rasm bor"><img className="myImg im" src={p7} alt="Nature"
                                onclick={myFunction} /></abbr>
                        </div>
                        <div className="border column col-sm-3 imgs">
                            <abbr title="rasmm"><img className="myImg im" src={p8} alt="Snow"
                                onclick={myFunction} /></abbr>
                        </div>
                        <div className="border column col-sm-3 imgs">
                            <abbr title="surat"><img className="myImg im " src={person0} alt="Mountains"
                                onclick={myFunction} /></abbr>
                        </div>
                        <div className="border column col-sm-3 imgs">
                            <abbr title="photo"><img className="myImg im" src={person6} alt="Lights"
                                onclick={myFunction} /></abbr>
                        </div>
                    </div>


                    {/* <!-- The Modal --> */}
                    <div id="myModal" className="modalka">
                        <span className="close">&times;</span>
                        <img className="modal-contents im" id="img01" />
                        <div id="caption"></div>
                    </div>

                    <div className="container">
                        <span onclick="this.parentElement.style.display='none'" className="closebtn">&times;</span>
                        <img id="expandedImg" className='im' />
                        <div id="imgtext"></div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeGallery;