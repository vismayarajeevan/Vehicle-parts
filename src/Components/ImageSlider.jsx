


import React, { useEffect, useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { displayBannerUserApi } from "../services/allAPI";
import { showToast } from "../reusablecomponents/Toast";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("forward"); // 'forward' or 'reverse'
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const result = await displayBannerUserApi();
      console.log("bannerlist", result);

      if (result.status === 200) {
        setImages(result.data.banners);
      } else {
        showToast("Failed to fetch banners", "error");
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
      showToast("Something went wrong while fetching banners", "error");
    }
  };

  const nextSlide = () => {
    if (images.length > 1) {
      if (direction === "forward") {
        if (currentIndex === images.length - 1) {
          setDirection("reverse");
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        if (currentIndex === 0) {
          setDirection("forward");
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }
  };

  const prevSlide = () => {
    if (images.length > 1) {
      if (direction === "forward") {
        if (currentIndex === 0) {
          setDirection("reverse");
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      } else {
        if (currentIndex === images.length - 1) {
          setDirection("forward");
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  };

  useEffect(() => {
    let timer;
    if (images.length > 1) {
      timer = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, direction, images.length]);

  return (
    <>
      {/* Main Content */}
      <main className="pt-5 pb-5" style={{ backgroundColor: "#DCEDEF" }}>
        <div className="container">
          {/* Carousel */}
          {images.length === 1 ? (
            // Single image display
            <div className="w-100 rounded" style={{ height: "500px", overflow: "hidden" }}>
              <img
                src={images[0].images}
                alt=""
                className="w-100 h-100 img-fluid"
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            // Carousel for multiple images
            <Carousel
              activeIndex={currentIndex}
              onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
              controls={false}
              indicators={false}
            >
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image.images}
                    alt=""
                    className="d-block w-100 rounded"
                    style={{ height: "500px", objectFit: "cover" }}
                  />

                  {/* Side buttons */}
                  <button
                    onClick={prevSlide}
                    className="position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded-circle transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded-circle transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} />
                  </button>
                </Carousel.Item>
              ))}
            </Carousel>

            
          )}

          {/* Bottom round slide bars */}
          {images.length > 1 && (
            <div className="d-flex justify-content-center gap-2 mt-4">
              {images.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-circle p-0 transition-all ${
                    currentIndex === index ? "bg-grey" : "bg-secondary opacity-50"
                  }`}
                  style={{
                    width: currentIndex === index ? "14px" : "12px",
                    height: currentIndex === index ? "14px" : "12px",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ImageSlider;