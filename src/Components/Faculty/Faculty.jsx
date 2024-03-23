import React from 'react'
import './Faculty.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import fac_1 from '../../assets/fac_1.png'
import fac_2 from '../../assets/fac_1.png'
import fac_3 from '../../assets/fac_1.png'
import fac_4 from '../../assets/fac_1.png'
import fac_5 from '../../assets/fac_1.png'

const Faculty = () => {
  return (
    <div className='faculty'>
        <img src={nextIcon} alt="" className='next-btn' />
        <img src={backIcon} alt="" className='back-btn' />
      <div className="slider">
        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_1} alt="" />
                        <div>
                            <h3>Dr. Kirubanantham P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies 
                        Mail Id: amuthab@srmist.edu.in 
                        Phone Number: 9445242714</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_2} alt="" />
                        <div>
                            <h3>Dr. Kirubanantham P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies 
                        Mail Id: amuthab@srmist.edu.in 
                        Phone Number: 9445242714</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_3} alt="" />
                        <div>
                            <h3>Dr. Kirubanantham P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies 
                        Mail Id: amuthab@srmist.edu.in 
                        Phone Number: 9445242714</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_4} alt="" />
                        <div>
                            <h3>Dr. Kirubanantham P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies 
                        Mail Id: amuthab@srmist.edu.in 
                        Phone Number: 9445242714</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fac_5} alt="" />
                        <div>
                            <h3>Dr. Kirubanantham P.</h3>
                            <span>Assistant Professor</span>
                        </div>
                    </div>
                    <p>Department of Computing Technologies 
                        Mail Id: amuthab@srmist.edu.in 
                        Phone Number: 9445242714</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Faculty