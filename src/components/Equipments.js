import React from 'react';
import '../styles/equipments.css';
import dummy from '../assets/dummy.png'
import dummy2 from '../assets/duumy2.png'
import {useState} from 'react';

const Equipments = () => {
    const [selectedImage, setSelectedImage] = useState(dummy);

    const handleClick=(image)=>{
        setSelectedImage(image);
    }
  return (
    <div className="equipmentsBody">
        <div className="equipmentsHeader">Our machines</div>
        <div className="equipmentsTagline">Checkout our equipments</div>
        <div className="equipmentButtons">
            <button onClick={()=>handleClick(dummy)} className="equipmentButton">Free weights</button>
            <button onClick={()=>handleClick(dummy2)} className="equipmentButton">Strength training machines</button>
            <button onClick={()=>handleClick(dummy)} className="equipmentButton">Cardiovascular machines </button>
            <button onClick={()=>handleClick(dummy2)} className="equipmentButton">Functional training machines</button>
        </div>

        <div className="equipmentImagesContainer">
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
            <div className="box"><img className="dummyImages" src={selectedImage} alt="weights"/></div>
        </div>

    </div>
  )
}

export default Equipments