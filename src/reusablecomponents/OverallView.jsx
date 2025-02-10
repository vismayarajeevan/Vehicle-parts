import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Offcanvas } from "react-bootstrap";
import ChoicesItems from "../Components/ChoicesItems";
import { colors } from "../colors";
import filter from '../assets/filter.png'


const OverallView = ({ items, title }) => {

  const [show, setShow] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Filter items based on search input
  const filteredItems = items?.filter((item) =>
    item.partName.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="container py-4">
    <div className="d-flex align-items-center justify-content-between p-4">
      <Form>
        <Form.Control
          type="search"
          placeholder="Search here..."
          value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          style={{ width: "300px", border: "none", background: "#F0F0F0" }}
          aria-label="Search"
        />
      </Form>
      <div>
        <img
          src={filter}
          alt="filter"
          className="img-fluid"
          width={"30px"}
          onClick={handleShow}
        />
      </div>
    </div>

    {/* Cards displaying items */}
    <Container fluid className="p-4">
      <h2 className="mb-4">{title}</h2>
      <Row className="g-4">
        
    {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Col
                key={item._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="d-flex justify-content-center"
              >
                <ChoicesItems part={item} />
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">No items found.</p>
          )}
      </Row>
    </Container>

    {/* Offcanvas Bar */}
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="bottom"
      style={{ height: "50vh" }}
      className="rounded"
    >
      <Offcanvas.Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Button
          onClick={handleClose}
          style={{
            backgroundColor: "#800000",
            color: "white",
            border: "none",
            position: "absolute",
            left: "15px",
            top: "15px",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          &times;
        </Button>
        <Offcanvas.Title className="text-center">Filter</Offcanvas.Title>
      </Offcanvas.Header>
      <hr />

      <Offcanvas.Body>
        <div className="d-flex flex-wrap gap-5">
          <div>
            <p style={{ color: colors.Black, fontWeight: "bold" }}>Condition</p>
            <hr />
            <p style={{ color: colors.Black, fontWeight: "bold" }}>Price</p>
            <hr />
            <p style={{ color: colors.Black, fontWeight: "bold" }}>Availability</p>
          </div>
          <div
            style={{
              width: "1px",
              backgroundColor: "#ccc",
              height: "auto",
              alignSelf: "stretch",
            }}
          ></div>
          <div className="d-flex flex-wrap gap-2">
            <div
              className="text-center"
              style={{
                backgroundColor: "gray",
                borderRadius: "20px",
                color: "white",
                width: "60px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              New
            </div>
            <div
              className="text-center"
              style={{
                backgroundColor: "gray",
                borderRadius: "20px",
                color: "white",
                width: "60px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              Used
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  </div>
  )
}

export default OverallView