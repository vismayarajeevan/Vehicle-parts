
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import whatsapp_icon from "../assets/whatsapp.png";
import { colors } from "../colors";
import { useParams } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800",
];

const Overview = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Container fluid className="p-5" style={{ overflowX: "hidden" ,
      height: "100vh", // Ensure container height is constrained
      overflow: "hidden", // Prevent content overflow
      }}>
      <Row className="g-4">
        {/* Image Section */}
        <Col md={6} style={{ maxHeight: "100vh", overflowY: "auto" }}>
          <div className="d-flex flex-column gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="position-relative overflow-hidden rounded"
                style={{ height: "400px" }}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
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
              top: "20px",
            }}
          >
            <h1 className="mb-5">Honda Civic Spoiler</h1>
            <p className="text-muted mb-5">
              High-quality spoiler designed specifically for Honda Civic models.
              Enhances aerodynamics and adds a sporty look to your vehicle.
            </p>

            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-evenly gap-3 mb-5">
                <div className="text-center">
                  <small className="text-muted d-block mb-2" style={{fontWeight:'700'}}>Category</small>
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
                  <small className="text-muted d-block mb-2" style={{fontWeight:'700'}}>Condition</small>
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
                <p style={{fontSize:"25px", fontWeight:'800'}}>₹ 25</p>
              </div>

            </div>

            {/* Price and WhatsApp Button */}
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

export default Overview;
