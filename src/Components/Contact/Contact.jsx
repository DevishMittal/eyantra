import React from 'react'
import './Contact.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import srm_logo from '../../assets/srm.svg'
import acc_logo from '../../assets/OIG2_upscayl_4x_realesrgan-x4plus.png'

const Contact = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links_div'>
            <div className='logo-container'>
              {/* Replace the URLs and alt text with your logo images */}
              <img src={srm_logo} alt="Logo 1" />
              {/* <img className='acc-logo' src={acc_logo} alt="Logo 2" /> */}
            </div>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Contact Details</h4>
            <a href="/employer">
              <p>Phone no: 484945451</p>
            </a>
            <a href="/employer">
              <p>Phone no: 484945451</p>
            </a>
            <a href="/employer">
              <p>Phone no: 484945451</p>
            </a>
            <a href="/employer">
              <p>Email : srm@srmist.edu.in</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Social Links</h4>
            <div className='socialMedia'>
            <a href="https://www.facebook.com/SRMUniversityOfficial" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30}/>
              </a>
              <a href="https://www.instagram.com/SRMUniversityOfficial/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30}/>
              </a>
              <a href="https://twitter.com/SRM_Univ" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={30}/>
              </a>
              <a href="https://www.linkedin.com/company/srm-ist-chennai" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}/>
              </a>
              <a href="https://www.youtube.com/user/SRMeducation" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <p>
              @{new Date().getFullYear()} SRMKTR. All rights reserved.
            </p>
          </div>
          <div className='sb_footer-below-links'>
            <a href="/terms"><div><p>Privacy Policy</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact