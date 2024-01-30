import React from 'react';
import '../styles/services.css';
import weightLiftingAnimation from '../assets/animations/weightLifting.json';
import Lottie from 'lottie-react';
import cardio from '../assets/animations/cardio.json';
import diet from '../assets/animations/diet.json';
import boxing from '../assets/animations/boxing';
import skipping from '../assets/animations/skipping.json';
import yoga from '../assets/animations/yoga.json';

const Services = () => {

  return (
    <div className="servicesSection">
        <div className="ourServices">Our Services</div>
        <div className="servicesHeader">Let us find the perfect</div>
        <div className="servicesHeader">workout for you!</div>
        <div className="servicesGridContainer">
            <div className="serviceGridBox">
            <Lottie 
                animationData={weightLiftingAnimation}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'120%'}}
                />
                <div className="serviceGridType">Weight lifting</div>
            </div>
            <div className="serviceGridBox">
            <Lottie 
                animationData={cardio}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'120%'}}
                />
                <div className="serviceGridType">Cardio</div>
            </div>
            <div className="serviceGridBox">
            <Lottie 
                animationData={boxing}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'120%'}}
                />
                <div className="serviceGridType">Boxing</div>
            </div>
            <div className="serviceGridBox">
            <Lottie 
                animationData={diet}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'120%'}}
                />
                <div className="serviceGridType">Diet plans</div>
            </div>
            <div className="serviceGridBox">
            <Lottie 
                animationData={skipping}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'120%'}}
                />
                <div className="serviceGridType">HIIT</div>
            </div>
            <div className="serviceGridBoxLast">
            <Lottie 
                animationData={yoga}
                loop={true}
                autoPlay={true}
                style={{height:'auto', width:'100%'}}
                />
                <div className="serviceTypeLast">Yoga</div>
            </div>
        </div>
        
    </div>
  )
}

export default Services