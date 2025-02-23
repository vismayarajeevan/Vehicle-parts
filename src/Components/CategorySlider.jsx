import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import others_img from "../assets/others.png";
import car_img from "../assets/car.png";
import bike_img from "../assets/bike.png";
import bus_img from "../assets/bus.png";
import cycle_img from "../assets/cycle.png";
import scooty_img from "../assets/scooty.png";

const CategorySlider = ({displayData}) => {
 
  
  const categories = [
    {
      id: "car",
      name: "CAR",
      image: car_img,
    },
    {
      id: "bike",
      name: "BIKE",
      image: bike_img,
    },
    {
      id: "bus",
      name: "BUS",
      image: bus_img,
    },
    {
      id: "cycle",
      name: "CYCLE",
      image: cycle_img,
    },
    {
      id: "scooty",
      name: "SCOOTY",
      image: scooty_img,
    },
    {
      id: "others",
      name: "OTHERS",
      image: others_img,
    },
  ];

  return (
    <>
      <Container className="py-5">
        <div className="mb-5">
          <Row className="g-4">
            {categories.map((category) => (
              <Col key={category._id} xs={6} sm={4} md={3} lg={2}>
                <Link
                  to={`/category/${category.name.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  state={{ categoryItems: displayData }} // Pass the correct data
                >
                  <div
                    className="position-relative cursor-pointer"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="bg-white rounded-4 position-relative"
                      style={{
                        height: "140px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #E8E8E8",
                        padding: "15px",
                      }}
                    >
                      <div className="text-center mb-2">
                        <span className="fw-bold" style={{ fontSize: "18px" }}>
                          {category.name}
                        </span>
                      </div>
                      <img
                        src={category.image}
                        alt={category.partName}
                        className="position-absolute start-50 translate-middle-x"
                        style={{
                          maxWidth: "90%",
                          maxHeight: "120px",
                          objectFit: "contain",
                          bottom: "-30px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default CategorySlider;
