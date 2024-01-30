import React from 'react';
import '../styles/home.css';
import { FaCirclePlay, FaWindows } from "react-icons/fa6";
import Lottie from 'lottie-react';
import homePageAnimation from '../assets/animations/homePage.json';
import { GiWeightScale } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";

const Home = () => {

    // function scrollPage(index){
    //     console.log("scrolling", index)
    //     window.scrollBy({left:0, top:`${index*150}`},)
    // }

    function scrollPage(index) {
        console.log("scrolling", index);
        const vh = window.innerHeight / 100; // Calculate 1 vh in pixels
        window.scrollBy({ left: 0, top: `${index * 115 * vh}` });
    }
    

  return (
    <div className="homePage">
        <div className="headerSection">
            <span className="gymNameSection"><span className="logoName">A</span>drenaline <span className="logoName">F</span>itness.</span>
            <span style={{marginRight:'20px', marginLeft:"65px"}}className="navBarOptions" onClick={()=>{scrollPage(0)}}>Home</span>
            <span className="navBarOptions" onClick={()=>{scrollPage(1)}}>About us</span>
            <span className="navBarOptions" onClick={()=>{scrollPage(2)}}>Services</span>
            <span onClick = {()=>{scrollPage(3)}} className="navBarOptions">Classes</span>
            <span className="navBarOptions" onClick={()=>{scrollPage(6)}}>Membership</span>
            <span className="navBarOptions" onClick={()=>{scrollPage(8)}}>Trainers</span>
            <span className="navBarOptions" onClick={()=>{scrollPage(9)}}>Blog</span>
            <span className="navBarLastOptions" onClick={()=>{scrollPage(10)}}>Contact</span>
        </div>
        <div className="bodySection">
            <div className="bodySectionDescription">
                <div className="homePagetagline">Unleash your potential, Elevate your fitness journey</div>
                <div className="homePagetaglineDescription">Are you ready to redefine your limits, shatter your expectations, and emerge as a stronger, healthier version of yourself?</div>
                <button className="startNowBtn">Start now</button>
                <span className="youtubeBtn"><FaCirclePlay className="youtubeIcon" />Watch a video</span>
            </div>

            <div className="bodySectionAnimation">
                <Lottie 
                animationData={homePageAnimation}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'100%'}}
                />

            </div>
        </div>
        <div className="homePageServices">
            <div className="services">
                <div className="serviceIcon"><GiWeightScale className="weighingScaleIcon" /></div>
                <div className="serviceType">Dedicated services</div>
                <div className="serviceDescription">Personalized fitness guidance & exclusive amenities, ensuring members receive tailored workouts for achieving their health & wellness goals</div>
            </div>
            <div className="services">
            <div className="serviceIcon"><GiWeightLiftingUp className="weightsIcon" /></div>
                <div className="serviceType">Certified training</div>
                <div className="serviceDescription">Offering certified training ensures members receive expert guidance and instruction, promoting safe and effective workout experiences</div>
            </div>
            <div className="services">
            <div className="serviceIcon"><GiWeightScale className="equipmentIcon" /></div>
                <div className="serviceType">Tons of equipment</div>
                <div className="serviceDescription">Equipped with a diverse range of fitness tools and machines, ensuring members have ample resources for effective and varied training sessions</div>
            </div>
        </div>

    </div>
  )
}

export default Home