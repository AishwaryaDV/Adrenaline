import React from 'react';
import '../styles/home.css'
import bodyBuilder from '../assets/bodyBuilder.png'

const Home = () => {
  return (
    <div className="homePageLayout">
        <div className="homePageImageSection">
            <img className="homePageImage" src={bodyBuilder} alt="body builder"/>
        </div>
        <div className="homePageDescSection">
            <div className="headerSection">
                <div className="aboutLink">About</div>
                <div className="equipmentLink">Equipment</div>
                <div className="servicesLink">Services</div>
                <div className="membershipsLink">Memberships</div>
                <div className="contactLink">Contact</div>
            </div>
            <div className="welcomeLineSection">Welcome to Adrenaline Fitness!</div>
            <div className="tagline">Unleash your potential</div>
            <div className="tagline">Elevate your fitness journey</div>
            <div className="subTagline">Are you ready to redefine your limits, shatter your expectations, and emerge as a stronger, healthier version of yourself?</div>
            <button className="joinBtn">Join Now</button>
            <div className="homePageStatsCountSection">
                <span className="customerCount">200+</span>
                <span className="trainerCount">10+</span>
                <span className="challengesCount">50+</span>
                <span className="tranformationsCount">100+</span>
            </div>
            <div className="homePageStatsSection">
                <span className="customerCountTag">Customers</span>
                <span className="trainerCountTag">Trainers</span>
                <span className="challengesCountTag">Challenges</span>
                <span className="tranformationsCountTag">Transformations</span>
            </div>
        </div>
        
    </div>
  )
}

export default Home