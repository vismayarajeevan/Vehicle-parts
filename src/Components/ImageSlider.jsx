import React, { useEffect, useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'

import "bootstrap/dist/css/bootstrap.min.css";


import "bootstrap/dist/css/bootstrap.min.css";
import {  ChevronLeft, ChevronRight } from 'lucide-react';


const ImageSlider = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1570733117311-d990c3816c47?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1200",
  ];

 


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);


    
  return (
   <>
       
      {/* Main Content */}
      <main className="pt-5 pb-5" style={{ backgroundColor: '#DCEDEF'}}>
        <div className="container">
        {/* Carousel */}
        <Carousel activeIndex={currentIndex} onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)} controls={false} indicators={false}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt="" className="d-block w-100 rounded" style={{ height: "500px", objectFit: "cover" }}/>
             

            {/* side buttons */}
              <button onClick={prevSlide} className="position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded-circle transition-colors"
                  aria-label="Previous slide">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded-circle transition-colors"
                  aria-label="Next slide" >
                  <ChevronRight size={24} />
                </button>

              
                {/* Bottom round slide bars */}

           <div className="d-flex justify-content-center gap-2 mt-4">
             {images.map((_, index) => (
             <Button key={index} onClick={() => setCurrentIndex(index)} aria-label={`Go to slide ${index + 1}`} className={`rounded-circle p-0 transition-all ${
              currentIndex === index ? "bg-grey" : "bg-secondary opacity-50" }`}
              style={{ width: currentIndex === index ? "14px" : "12px", height: currentIndex === index ? "14px" : "12px", transition: "all 0.3s ease",
               }}/>
              ))}
           </div>
        </Carousel.Item>
          ))}
        </Carousel>

      </div>
    </main>
   </>
  )
}

export default ImageSlider