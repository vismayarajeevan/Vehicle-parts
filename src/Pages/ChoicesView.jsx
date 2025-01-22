import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import filter from "../assets/filter.png";

const ChoicesView = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-4">
        <Form>
          <Form.Control
            type="search"
            placeholder="Search here..."
            style={{ width: "300px", border: "none", background: "#F0F0F0" }}
            aria-label="Search"
          />
        </Form>
        <div>
          <img src={filter} alt="" className="img-fluid" width={"30px"} />
        </div>
      </div>

      {/* cards */}
      <Container fluid className="p-4">
        <Row>
          <Col lg={4} md={4} sm={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div></div>
    </div>
  );
};

export default ChoicesView;
