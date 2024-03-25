import React, { useRef} from 'react'
import './Faculty.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import fac_1 from '../../assets/faculty_img/Ponmagal R S.jpg'
import fac_2 from '../../assets/faculty_img/Kirubanantham P.jpg'
import fac_3 from '../../assets/faculty_img/Jeya R.jpg'
import fac_4 from '../../assets/faculty_img/Thamizhikkavi P.jpg'
import fac_5 from '../../assets/faculty_img/Kanmani S P.jpg'
import fac_6 from '../../assets/faculty_img/Jagadeesan S.jpg'
import fac_7 from '../../assets/faculty_img/Sathyapriya L.jpg'
import fac_8 from '../../assets/faculty_img/Ramya M.jpg'
import fac_9 from '../../assets/faculty_img/Rekha G.jpg'
import fac_10 from '../../assets/faculty_img/Nagadevi S.jpg'
import fac_11 from '../../assets/faculty_img/Anbarasi A.jpg'
import fac_12 from '../../assets/faculty_img/Dorathi Jayaseeli D.png'
import fac_13 from '../../assets/faculty_img/Vidhya R.jpg'
import fac_14 from '../../assets/faculty_img/Revathi M.jpg'
import fac_15 from '../../assets/faculty_img/Thamizhamuthu R.jpg'
import fac_16 from '../../assets/faculty_img/Ajanthaa Lakkshmanan.jpg'
import fac_17 from '../../assets/faculty_img/Prakash B.jpg'
import fac_18 from '../../assets/faculty_img/Brindha R.jpg'
import fac_19 from '../../assets/faculty_img/Malathi D.jpg'
import fac_20 from '../../assets/faculty_img/Saranya V S.jpg'
import fac_21 from '../../assets/faculty_img/Arul Murugan A.jpg'
import fac_22 from '../../assets/faculty_img/Amutha B.jpg'
import fac_23 from '../../assets/faculty_img/Deeban V.jpg'
import fac_24 from '../../assets/faculty_img/Deeba K.jpg'
import fac_25 from '../../assets/faculty_img/Vathana D.jpg'
import fac_26 from '../../assets/faculty_img/Vanusha D.jpg'
import fac_27 from '../../assets/faculty_img/Arulprakash M.jpg'
import fac_28 from '../../assets/faculty_img/Renuka Devi P.jpg'

// const Faculty = () => {

//     const slider = useRef();
//     let tx = 0;

// const slideForward = ()=> {

//     if(tx > -98){
//         tx -= 3.7;
//     }
//     slider.current.style.transform = `translateX(${tx}%)`

// }
// const slideBackward = ()=> {

//     if(tx < 0){
//         tx += 4;
//     }
//     slider.current.style.transform = `translateX(${tx}%)`
// }  
//   return (
//     <div className='faculty'>
//         <img src={nextIcon} alt="" className='next-btn' onClick={slideForward} />
//         <img src={backIcon} alt="" className='back-btn' onClick={slideBackward} />
const Faculty = () => {
    const slider = useRef();
    let tx = 0;

    // Function for sliding on desktop
    const slideDesktop = (direction) => {
        if (direction === 'forward' && tx > -90) {
            tx -= 3.7;
        } else if (direction === 'backward' && tx < -2) {
            tx += 4;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    // Function for sliding on mobile
    const slideMobile = (direction) => {
        if (direction === 'forward' && tx > -95) {
            tx -= 1.5;
        } else if (direction === 'backward' && tx < -1) {
            tx += 3.5;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const handleSlide = (direction) => {
        const isMobile = window.innerWidth <= 600;
        if (isMobile) {
            slideMobile(direction);
        } else {
            slideDesktop(direction);
        }
    };

    return (
        <div className='faculty'>
            <img src={nextIcon} alt='' className='next-btn' onClick={() => handleSlide('forward')} />
            <img src={backIcon} alt='' className='back-btn' onClick={() => handleSlide('backward')} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_1} alt="" /> 
                        <div>
                            <h3>Dr.R.S.Ponmagal</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: ponmagas@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_2} alt="" />
                        <div>
                            <h3>Dr.Kirubanantham P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: kirubanp2@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_3} alt="" />
                        <div>
                            <h3>Dr.R.Jeya</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: jeyar@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_4} alt="" />
                        <div>
                            <h3>Thamizhikkavi P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: thamizhp2@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_5} alt="" />
                        <div>
                            <h3>Ms.Kanmani S.P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: kanmanis@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_6} alt="" />
                        <div>
                            <h3>Jagadeesan S.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: jagadees@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_7} alt="" />
                        <div>
                            <h3>Dr.Sathyapriya L.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: sathyapl@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_8} alt="" />
                        <div>
                            <h3>Ramya.M</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: ramyam5@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_9} alt="" />
                        <div>
                            <h3>Rekha G.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: rekhag1@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_10} alt="" />
                        <div>
                            <h3>Dr.S.Nagadevi</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: nagadevs@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_11} alt="" />
                        <div>
                            <h3>Dr.A.Anbarasi</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: anbarasa3@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_12} alt="" />
                        <div>
                            <h3>Dr.J.D.Dorathi Jayaseeli</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: dorathij@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_13} alt="" />
                        <div>
                            <h3>Dr.R.Vidhya</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: vidhyar@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_14} alt="" />
                        <div>
                            <h3>Dr.Revathi M.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: revathim@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_15} alt="" />
                        <div>
                            <h3>Dr.R.Thamizhamuthu</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: thamizhr@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_16} alt="" />
                        <div>
                            <h3>Dr.Ajanthaa Lakkshmanan</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: ajanthal@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_17} alt="" />
                        <div>
                            <h3>Dr.B.Prakash</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: prakashb@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_18} alt="" />
                        <div>
                            <h3>R.Brindha</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: brindhar1@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_19} alt="" />
                        <div>
                            <h3>Dr.D.Malathi</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: malathid@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_20} alt="" />
                        <div>
                            <h3>Saranya V.S.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: saranyav3@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_21} alt="" />
                        <div>
                            <h3>Dr.A.Arulmurugan</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: arulmura1@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_22} alt="" />
                        <div>
                            <h3>B Amutha</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: amuthab@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_23} alt="" />
                        <div>
                            <h3>Dr.V.Deeban Chakravarthy</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: deepanv@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_24} alt="" />
                        <div>
                            <h3>Dr.K.Deeba</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: deebak@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_25} alt="" />
                        <div>
                            <h3>Vathana D.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: vathanad@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_26} alt="" />
                        <div>
                            <h3>D.Vanusha</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: vanushad@srmist.edu.in 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_27} alt="" />
                        <div>
                            <h3>Dr.M.Arulprakash</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: arulpram@srmist.edu.in
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_28} alt="" />
                        <div>
                            <h3>P.Renukadevi</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies <br />
                        Mail Id: renukdp@srmist.edu.in
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Faculty