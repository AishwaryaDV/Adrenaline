import React from 'react';
import '../styles/trainers.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonial1 from '../assets/testimonial1.png';
import Modal from 'react-modal';
import { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";

Modal.setAppElement('#root');

const Trainers = () => {
    const [modalIsOpen, setModalIsOpen]= useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
   
    const openModal = () => {
        setModalIsOpen(true);
      };
    
    const closeModal = () => {
        setModalIsOpen(false);
      };

    const testimonialCarouselItems=[
        {
            imageSrc: testimonial1,
            name: "Suresh Pandya",
            occupation: "Cardio",
            type:"Club Manager & Men's Personal Trainer"
        },
        {
            imageSrc: testimonial1,
            name: "Suresh Pandya",
            occupation: "Cardio",
            type:"Club Manager & Men's Personal Trainer"
        },
        {
            imageSrc: testimonial1,
            name: "Suresh Pandya",
            occupation: "Cardio",
            type:"Club Manager & Men's Personal Trainer"
        },
        {
            imageSrc: testimonial1,
            name: "Suresh Pandya",
            occupation: "Cardio",
            type:"Club Manager & Men's Personal Trainer"
        },
        {
            imageSrc: testimonial1,
            name: "Suresh Pandya",
            occupation: "Cardio",
            type:"Club Manager & Men's Personal Trainer"
        },
        {
            imageSrc: testimonial1,
            name: "Suresh Pandya",
            occupation: "Cardio",
            type:"Club Manager & Men's Personal Trainer"
        },
        ];
        const customStyles = {
            content: {
              width: '50%', // Set the width of the modal
              height: '50%', // Set the height of the modal
              margin: 'auto', // Center the modal horizontally
              zIndex: 200,
            },
          };

  return (
    <div className="trainersSection">
        <div className="trainersHeader">Our trainers</div>
        <div className="trainersTagline">Our professional coaches</div>
        <Carousel 
        showArrows={true} 
        showStatus={false} 
        infinisteScroll={true} 
        autoPlay={true} 
        showThumbs={false} 
        centerMode={true} 
        centerSlidePercentage={33.3} 
        className={modalIsOpen ? 'carousel-hidden' : ''}>

            {testimonialCarouselItems.map((item,index)=>(
                <div className="testimonialCarouselCard" onClick={openModal} key={index}>
                    <img  className="testimonialImage" src={item.imageSrc} alt="testimonial images"/>
                    <div className="overlayTestimonialDesc">
                        <div className="testimonialName">{item.name}</div>
                        <div className="testimonialOccupation">{item.occupation}</div>
                    </div>
                </div>
            ))}
        </Carousel>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <button className="modalCloseBtn" onClick={closeModal}><IoCloseCircle className="closeIcon"/></button>
            <div className="modalSection">
              <div className="trainerImageSection">
                <img className="trainerImage" src={testimonial1} alt="trainer"/>
              </div>
              <div className="trainerDescription">
              </div>
            </div>
         
      </Modal>
    </div>
  )
}

export default Trainers