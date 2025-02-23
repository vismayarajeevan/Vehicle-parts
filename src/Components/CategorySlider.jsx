

import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import others_img from "../assets/others.png";
import car_img from "../assets/car.png";
import bike_img from "../assets/bike.png";
import bus_img from "../assets/bus.png";
import cycle_img from "../assets/cycle.png";
import scooty_img from "../assets/scooty.png";
import "./categorySlider.css";

const CategorySlider = ({ displayData }) => {
  const categories = [
    { id: "car", name: "CAR", image: car_img },
    { id: "bike", name: "BIKE", image: bike_img },
    { id: "bus", name: "BUS", image: bus_img },
    { id: "cycle", name: "CYCLE", image: cycle_img },
    { id: "scooty", name: "SCOOTY", image: scooty_img },
    { id: "others", name: "OTHERS", image: others_img },
  ];

  return (
    <Container className="py-5">
      <Row className="g-4">
        {categories.map((category) => (
         

          <Col key={category.id} xs={6} sm={4} md={3} lg={2}>
  <Link
    to={`/category/${category.name.toLowerCase()}`}
    style={{ textDecoration: "none", color: "inherit" }}
    state={{ categoryItems: displayData }}
  >
    <div className="category-card-wrapper">
      <Card className="category-card">
        <Card.Body className="text-center p-3">
          <img src={category.image} alt={category.name} className="category-image" />
          <hr className="category-divider" />
          <span className="fw-bold category-name">{category.name}</span>
        </Card.Body>
      </Card>
    </div>
  </Link>
</Col>

        ))}
      </Row>
    </Container>
  );
};

export default CategorySlider;
