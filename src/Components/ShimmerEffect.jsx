import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ShimmerEffect = () => {
  return (
    <Row className="g-4">
      {[...Array(4)].map((_, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="p-3">
              <div
                style={{
                  height: '200px',
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: '#f0f0f0',
                }}
              ></div>
            </div>
            <Card.Body style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    height: '20px',
                    width: '80%',
                    backgroundColor: '#f0f0f0',
                    marginBottom: '10px',
                  }}
                ></div>
                <div
                  style={{
                    height: '20px',
                    width: '50%',
                    backgroundColor: '#f0f0f0',
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: '20px',
                  width: '100%',
                  backgroundColor: '#f0f0f0',
                }}
              ></div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ShimmerEffect;