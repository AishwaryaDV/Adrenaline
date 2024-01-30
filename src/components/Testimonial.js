import React from 'react';
import '../styles/testimonial.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonial1 from '../assets/testimonial1.png';
import { ImQuotesRight } from "react-icons/im";

const Testimonial = () => {
    const testimonialCarouselItems=[
    {
        imageSrc: testimonial1,
        name:"Anya Singh",
        designation: "Personal Trainer",
        text: "Best gym in the locality. Clean and hygenic and neatly maintained. They have modern equipment and skilled trainers."
    },
    {
        imageSrc: testimonial1,
        name:"Anya Singh",
        designation: "Personal Trainer",
        text: "Best gym in the locality. Clean and hygenic and neatly maintained. They have modern equipment and skilled trainers."
    },
    {
        imageSrc: testimonial1,
        name:"Anya Singh",
        designation: "Personal Trainer",
        text: "Best gym in the locality. Clean and hygenic and neatly maintained. They have modern equipment and skilled trainers."
    },
    {
        imageSrc: testimonial1,
        name:"Anya Singh",
        designation: "Personal Trainer",
        text: "Best gym in the locality. Clean and hygenic and neatly maintained. They have modern equipment and skilled trainers."
    },
    {
        imageSrc: testimonial1,
        name:"Anya Singh",
        designation: "Personal Trainer",
        text: "Best gym in the locality. Clean and hygenic and neatly maintained. They have modern equipment and skilled trainers."
    },
    {
        imageSrc: testimonial1,
        name:"Anya Singh",
        designation: "Personal Trainer",
        text: "Best gym in the locality. Clean and hygenic and neatly maintained. They have modern equipment and skilled trainers."
    },
    ];
  return (
    <div className="testimonialSection">
        <div className="testimonialHeader">Our reviews</div>
        <div className="testimonialTagline">Testimonials</div>
        <Carousel
          showArrows={false} 
          showStatus={false} 
          className='check'
          infiniteScroll={true} 
          autoPlay={true} 
          showThumbs={false} 
          centerMode={true} 
          centerSlidePercentage={25}>
        {testimonialCarouselItems.map((item,index)=>(
            <div className="testimonialsCarouselCard" key={index}>
                <div className="testimonialCard">
                    <div className="colorSection">
                        <div className="reviewerImageContainer">
                            <img className="reviewerImage" src={testimonial1} alt="reviewers photos"/>
                        </div>
                    </div>
                    <div className="reviewsSection">
                        <div className="reviewerName">{item.name}<ImQuotesRight className="semicolonIcon"/></div>
                        <div className="reviewerDesignation">{item.designation}</div>
                        <div className="review">{item.text}</div>
                    </div>
                </div>
            </div>
        ))}
        </Carousel>
    </div>
  )
}

export default Testimonial