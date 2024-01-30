import React from 'react';
import '../styles/verticalcarousel.css';
import testimonial1 from '../assets/testimonial1.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalCarousel = () => {
    const servicesCarouselItems=[
        {
            imageSrc: testimonial1,
            type: "Weight training",
            text:"Weight training involves lifting and resistance exercises to build strength, muscle mass, and enhance overall fitness."
        },
        {
            imageSrc: testimonial1,
            type: "Weight training",
            text:"Weight training involves lifting and resistance exercises to build strength, muscle mass, and enhance overall fitness."
        },
        {imageSrc: testimonial1,
            type: "Weight training",
            text:"Weight training involves lifting and resistance exercises to build strength, muscle mass, and enhance overall fitness."
        },
        {
            imageSrc: testimonial1,
            type: "Weight training",
            text:"Weight training involves lifting and resistance exercises to build strength, muscle mass, and enhance overall fitness."
        }, 
        {
            imageSrc: testimonial1,
            type: "Weight training",
            text:"Weight training involves lifting and resistance exercises to build strength, muscle mass, and enhance overall fitness."
        },
    ];
    const settings={
        dots:true,
        infinite:true,
        vertical:true,
        arrows: false,
        speed:500,
        verticalSwiping:true,
        slidesToShow:2,
        slidesToScroll:1,
        variableHeight:true,
        autoPlay:true,
        autoPlaySpeed:3000,
    };
  return (
    <div>
        <div className="classesSection">
            <div className="classesDescription">
                <div className="classesTag">Our classes</div>
                <div className="classHeader">Ready to make your change?</div>
                <div className="classesTagline1">Experience personalised workout plans designed to match your fitness goals all while engaging in cutting-edge fitness classes and innovative workout programs. <br></br>Benefit from the expertise of our elite trainers certified in diverse fitness disciplines and train in a modern, well-equipped gym featuring all of the latest equipment.</div>
                <div className="classesTagline2">Join a vibrant community of like minded individuals today!</div>
                <button className="classesBtn">Contact us</button>
            </div>
            <div className="servicesCarousel">
                <Slider {...settings}>
                    {servicesCarouselItems.map((item,index)=>(
                    <div className="verticalCarouselCard" key={index}>
                        <div className="testimonialCard">
                            <div className="verticalLeftSection">
                                <div className="verticalCarouselImageContainer">
                                    <img className="verticalCarouselImage" src={testimonial1} alt="reviewers photos"/>
                                </div>
                            </div>
                            <div className="reviewsSection">
                                <div className="verticalCarouselType">{item.type}</div>
                                    <div className="verticalCarouselText">{item.text}</div>
                                    <div className="verticalCarouselSubtext">Learn more</div>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
                
                {/* <Slider {...settings}>
                    <div>Slide 1</div>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                </Slider> */}

            </div>
        </div>
    </div>
  )
}

export default VerticalCarousel