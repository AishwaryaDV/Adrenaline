import React from 'react';
import '../styles/about.css';
import Lottie from 'lottie-react';
import homePageAnimation from '../assets/animations/aboutPage.json';

const About = () => {
  return (
    <div className="aboutPage">
    <div className="aboutSection">
      <div className="aboutIconSection">
        <Lottie 
        animationData={homePageAnimation}
        autoPlay={true}
        loop={true}
        style={{width:'110%', height:'auto'}}
        />
      </div>

      <div className="aboutDescription">
        <div className="aboutUsHeader">About us</div>
        <div className="aboutPageTagline">Who are we?</div>
        <div className="aboutUsDescription">Welcome to Adrenaline Fitness, where fitness transforms lives! Founded in 2018, our passion for wellness drives us. 
          We've seen incredible transformations - weight loss, strength gains - because we're more than a gym, we're a commitment to a vibarnt life.
        </div>
        <div className="aboutUsDescription">Our elite trainers, certified in strength training and personalised fitness, are partners in your journey. </div>
        <div className="aboutUsDescription"> At Adrenaline Fitness, we're dedicated to improving lives. Join us, let's sculpt a healthier, stronger you together!</div>
        <button className="startNowBtn">Start now</button>
      </div>
    </div>

    <div className="badgesSection">
      <span className="badges"><span className="innerCircleBadge"></span>
        <div className="badgeCount">200+</div>
        <div className="badgeTag">Customers</div>
      </span>
      <span className="badges"><span className="innerCircleBadge"></span>
        <div className="badgeCount">20+</div>
        <div className="badgeTag">Trainers</div>
        </span>
      <span className="badges"><span className="innerCircleBadge"></span>
        <div className="badgeCount">100+</div>
        <div className="badgeTag">Challenges</div>
        </span>
      <span className="badges"><span className="innerCircleBadge"></span>
        <div className="badgeCount">100+</div>
        <div className="badgeTag">Transformations</div></span>
    </div>

    </div>
  )
}

export default About