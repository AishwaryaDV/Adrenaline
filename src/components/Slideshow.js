import React from 'react';
import '../styles/slideshow.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import slide4 from '../assets/images/slide4.jpg'
import slide5 from '../assets/images/slide5.jpg'
import slide6 from '../assets/images/slide6.jpg'
import slide7 from '../assets/images/slide7.jpg'
import slide8 from '../assets/images/slide8.jpg'
import slide9 from '../assets/images/slide9.jpg'


const Slideshow = () => {
    const slideshowItems=[
        {
            imageSrc: slide1
        },
        {
            imageSrc: slide2
        },
        {
            imageSrc: slide3
        },
        {
            imageSrc: slide4
        },
        {
            imageSrc: slide5
        },
        {
            imageSrc: slide6
        },
        {
            imageSrc: slide7
        },
        {
            imageSrc: slide8
        },
        {
            imageSrc: slide9
        },
        {
            imageSrc: slide1
        },
        {
            imageSrc: slide2
        },
        {
            imageSrc: slide3
        },
        {
            imageSrc: slide4
        },
        {
            imageSrc: slide5
        },
        {
            imageSrc: slide6
        },
    ]
  return (
    <div className="slideshowSection">
       <Carousel
       showArrows={false} 
       showStatus={false} 
       showIndicators={false}
       infinisteScroll={true} 
       autoPlay={true} 
       showThumbs={false} 
       centerMode={true} 
       centerSlidePercentage={20}
       slidesToShow={5}
       interval={3000}
       >
        {slideshowItems.map((item,index)=>(
            <div className="slideshowCarouselCard" key={index}>
                <img className="slideshowImage" src={item.imageSrc} alt="slideshow images"/>
            </div>
        ))}
       </Carousel>
    </div>
  )
}

export default Slideshow