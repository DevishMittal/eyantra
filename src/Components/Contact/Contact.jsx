import React from 'react'
import './Contact.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links_div'>
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Resources</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Parteners</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Company</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/employer">
              <p>Employer</p>
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