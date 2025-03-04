


import React from 'react';
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import whatsapp_icon from "../assets/whatsapp.png";
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardOverview = () => {
  const location = useLocation();
  const part = location.state?.part || {};

  console.log("part", part);

  const images = Array.isArray(part?.images) ? part.images : [part?.images].filter(Boolean);

  // Slider settings
  const sliderSettings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Auto-play interval
  };

  return (
    <Container
      fluid
      className="p-5"
      style={{
        overflowX: "hidden",
      }}
    >
      <Row className="g-4">
        {/* Image Section with Slider */}
        <Col
          md={6}
          className="order-md-1 order-1" // Always display images first on small screens
        >
          <div className="d-flex flex-column gap-4">
            {images.length > 0 ? (
              <Slider {...sliderSettings}>
                {images.map((img, index) => (
                  <div key={index} className="position-relative overflow-hidden rounded" style={{ height: "400px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img 
                      src={img} 
                      alt={`Slide ${index + 1}`} 
                      className="w-100 h-100"
                      style={{ 
                        objectFit: "contain",  // Ensures full image is visible without cropping
                        maxWidth: "100%", 
                        maxHeight: "100%",
                        aspectRatio: "16/9" // Maintains image proportions
                      }} 
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <p>No Image Available</p>
            )}
          </div>
        </Col>

        {/* Details Section */}
        <Col
          md={6}
          className="order-md-2 order-2" // Always display details below images on small screens
        >
          <div
            style={{
              position: "sticky",
              top: "20px", // Fixes the details section in place on larger screens
            }}
          >
            <h1 className="mb-5">{part.partName || "No Name Available"}</h1>
            <p className="text-muted mb-5">
              {part.description || "No description provided."}
            </p>

            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-evenly gap-3 mb-5">
                <div className="text-center">
                  <small className="text-muted d-block mb-2" style={{ fontWeight: '700',fontSize: "18px"  }}>Category</small>
                  <Badge style={{fontSize:'14px'}} bg="info">{part.category || "Unknown"}</Badge>
                </div>

                {/* Vertical Divider */}
                <div
                  style={{
                    width: "1px",
                    backgroundColor: "#ccc",
                    height: "70px",
                  }}
                ></div>
                <div className="text-center">
                  <small className="text-muted d-block mb-2" style={{ fontWeight: '700',fontSize: "18px" }}>Condition</small>
                  <Badge bg="warning" style={{fontSize:'14px'}}>{part.condition || "Unknown"}</Badge>
                </div>
              </div>
              <hr style={{ marginBottom: "30px" }} />
              <div className="d-flex align-items-center gap-2">
                <small
                  className="d-block"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Brand:-
                </small>
                <span className="text-muted">{part.brand}</span>
              </div>

              <div className="d-flex align-items-center gap-2 mt-2">
                <small
                  className="d-block"
                  style={{ fontWeight: "600", fontSize: "17px" }}
                >
                  Availability:-
                </small>
                <span className="text-muted">{part.stockAvailability ==true ? "Yes ✅ ":'No ❌ '}</span>
              </div>
              

              <div className="mt-3">
                <span className="price">₹ {part.price}</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div
              className="w-100 d-flex"
              style={{
                justifyContent: "flex-end",
                position: "fixed",
                bottom: "20px",
                right: "20px",
              }}
            >
              <Button
                className="btn"
                style={{ backgroundColor: "transparent", border: "none" }}
                href={`https://wa.me/${part.contactNumber?.replace(/\D/g, "")}`} 
                target="_blank"
              >
                <img
                  src={whatsapp_icon}
                  alt=""
                  width={"50px"}
                  className="img-fluid"
                />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardOverview;