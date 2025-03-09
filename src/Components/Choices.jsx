




import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ChoicesItems from "./ChoicesItems";
import ShimmerEffect from "./ShimmerEffect";

const Choices = ({ displayData, isLoading }) => {
  const [searchKey, setSearchKey] = useState("");
  const filteredParts = displayData?.filter((part) =>
    part.partName.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="container py-4">
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 font-weight-bold text-dark">Your Choices</h2>
          <Link
            to="/choices"
            state={{ parts: displayData }}
            className="d-flex align-items-center text-primary hover:text-blue-700"
          >
            See All
            <ChevronRight className="ms-2" />
          </Link>
        </div>
        <Form onSubmit={(e) => e.preventDefault()} className="d-none d-lg-block">
          <Form.Control
            type="search"
            placeholder="Search here..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            style={{
              width: "250px",
              border: "none",
              background: "#F0F0F0",
              height: "35px",
            }}
            aria-label="Search"
          />
        </Form>
      </div>

      {isLoading ? (
        <ShimmerEffect />
      ) : displayData?.length === 0 ? (
        <p className="text-center text-muted w-100">No items found.</p>
      ) : filteredParts.length > 0 ? (
        <Row className="g-4">
          {filteredParts.map((part) => (
            <Col
              key={part._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <ChoicesItems part={part} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted w-100">No matching parts found.</p>
      )}
    </div>
  );
};

export default Choices;