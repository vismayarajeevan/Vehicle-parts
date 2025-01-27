
import React from 'react';
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import whatsapp_icon from "../assets/whatsapp.png";
import { useLocation } from 'react-router-dom';

const CardOverview = () => {
  const location = useLocation();
  const { part } = location.state; // Access the passed data
  const images = Array.isArray(part.image) ? part.image : [part.image]; // Handle both single and multiple images

  return (
    <Container
      fluid
      className="p-5"
      style={{
        overflowX: "hidden",
        height: "100vh", // Ensure container height is constrained
        overflow: "hidden", // Prevent content overflow
      }}
    >
      <Row className="g-4">
        {/* Image Section */}
        <Col
          md={6}
          style={{
            maxHeight: "100vh",
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          <div className="d-flex flex-column gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="position-relative overflow-hidden rounded"
                style={{ height: "400px" }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>
            ))}
          </div>
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <div
            style={{
              position: "sticky",
              top: "20px", // Fixes the details section in place
            }}
          >
            <h1 className="mb-5">{part.name}</h1>
            <p className="text-muted mb-5">
              High-quality spoiler designed specifically for Honda Civic models.
              Enhances aerodynamics and adds a sporty look to your vehicle.
            </p>

            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-evenly gap-3 mb-5">
                <div className="text-center">
                  <small className="text-muted d-block mb-2" style={{ fontWeight: '700' }}>Category</small>
                  <Badge bg="info">Car</Badge>
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
                  <small className="text-muted d-block mb-2" style={{ fontWeight: '700' }}>Condition</small>
                  <Badge bg="warning">New</Badge>
                </div>
              </div>
              <hr style={{ marginBottom: "30px" }} />
              <div className="d-flex align-items-center gap-2">
                <small
                  className="d-block"
                  style={{ fontWeight: "600", fontSize: "20px" }}
                >
                  Brand:-
                </small>
                <span className="text-muted">Honda</span>
              </div>

              <div className="mt-3">
                <p style={{ fontSize: "25px", fontWeight: '800' }}>₹ {part.price}</p>
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
                href="https://wa.me/1234567890"
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
