import React from 'react';
import '../styles/footer.css';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail]= useState(null);
    const handleInput =(e)=>{
        setEmail(e.target.value);
        console.log(email);
    }
  return (
    <div className="footerSection">
        <div className="emailBox">
            <div className="emailHeader">Subscribe for our daily tips</div>
            <div className="emailTagline">Empower your well-being with our daily dose of health and fitness wisdom!</div>
           <div className="emailWrapper">
                <input type="text" className="inputEmail" placeholder="Enter your email address.."/>
                <button onChange={handleInput} className="subscribeBtn">Subscribe</button>
           </div>
        </div>
        <div className="footerDetails">
            <div className="gymDetails">
                <div className="gymNameFooterSection"><span className="logoNameFooter">A</span>drenaline <span className="logoName">F</span>itness.</div>
                <div className="gymDetailsTagline">With our professional trainers and services, we are committed to help you acheive your dream body and health goals.</div>
                <span><FaFacebookF className="socialMediaIcon"/></span>
                <span><IoLogoInstagram className="socialMediaIcon"/></span>
                <span><IoLogoYoutube className="socialMediaIcon"/></span>
            </div>
            <div className="gymLinks">
                <div className="gymLinksHeader">Our links</div>
                <div className="gymLink">Home</div>
                <div className="gymLink">About us</div>
                <div className="gymLink">Services</div>
                <div className="gymLink">Classes</div>
                <div className="gymLink">Blog</div>
            </div>
            <div className="otherLinks">
            <div className="gymLinksHeader">Other links</div>
                <div className="gymLink">Team</div>
                <div className="gymLink">Membership price</div>
                <div className="gymLink">BMI calculator</div>
                <div className="gymLink">Testimonials</div>
                <div className="gymLink">FAQ</div>
            </div>
            <div className="contactDetails">
            <div className="contactDetailsHeader">Contact us</div>
                <div className="contactSection">
                    <IoCall className="contactIcon"/>
                    <div className="contactNo">+91 7346656792</div>
                    <div className="contactNo2">+91 7346656792</div>
                </div>
                <div className="contactSection">
                    <FaLocationDot className="contactIcon"/>
                    <div className="address"># 229, "KEKADA HEIGHTS" building, RHCS Layout, Annapoorneshwari Nagar, Naagarabhaavi, Bengaluru, Karnataka 560091</div>
                </div>
                <div className="contactSection">
                    <IoMdMailOpen className="contactIcon"/>
                    <div className="email">adrenalinefitness@gmail.com</div>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <span className="copyrightLine">&#169; 2024 <span className="logoNameFooter">Adrenaline Fitness</span> </span>
        <span className="privacyLine">Privacy Policy &bull; Terms & Condition &bull; Cookie Policy</span>

    </div>
  )
}

export default Footer