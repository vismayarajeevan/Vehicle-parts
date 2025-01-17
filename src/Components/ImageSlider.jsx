import React, { useEffect, useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'

import "bootstrap/dist/css/bootstrap.min.css";
import slide_img from '../assets/slide.jpg'


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

  const titles = [
    "Luxury Sports Car",
    "Classic Vintage",
    "Modern SUV",
    "Electric Future",
    "Performance Beast",
    "Luxury Sedan",
    "Off-Road Adventure",
    "Supercar Excellence",
    "Urban Explorer",
    "Racing Heritage",
  ];

  const descriptions = [
    "Experience unmatched performance and style",
    "Timeless elegance and character",
    "Perfect blend of comfort and capability",
    "Sustainable driving without compromise",
    "Pure power meets precision engineering",
    "Where comfort meets sophistication",
    "Conquer any terrain with confidence",
    "Pushing the boundaries of speed",
    "Navigate city streets with style",
    "Born from motorsport excellence",
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
    // <div style={{ backgroundColor: '#DCEDEF', padding: '20px' }}>
    //     <Carousel data-bs-theme="dark">
    //   <Carousel.Item>
    //     <img className="d-block" style={{ width: '70%', margin: '0 auto' }} src={slide_img} alt="First slide"/> 
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block" style={{ width: '70%', margin: '0 auto' }} src={slide_img} alt="Second slide"/>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block" style={{ width: '70%', margin: '0 auto' }} src={slide_img} alt="Third slide"/>  
    //   </Carousel.Item>
    // </Carousel>
    // </div>



    <main className="pt-4">
    <div className="container">
      <h1 className="text-center mb-4">Featured Vehicles</h1>

      {/* Carousel */}
      <Carousel
        activeIndex={currentIndex}
        onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
        controls={false}
        indicators={false}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image}
              alt={titles[index]}
              className="d-block w-100 rounded"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{titles[index]}</h3>
              <p>{descriptions[index]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between align-items-center my-3">
        <Button variant="dark" onClick={prevSlide}>
          Previous
        </Button>
        <Button variant="dark" onClick={nextSlide}>
          Next
        </Button>
      </div>



      {/* Thumbnails */}
      <div className="d-flex justify-content-center gap-2 overflow-auto">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`border rounded overflow-hidden ${
              currentIndex === index ? "border-primary" : "border-secondary"
            }`}
            style={{ cursor: "pointer", width: "100px", height: "60px" }}
          >
            <img
              src={image}
              alt={titles[index]}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  </main>
  )
}

export default ImageSlider