import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoicesItems = ({ part, parts }) => {
  const images = Array.isArray(part.images) ? part.images : [part.images];

  return (
    <div>
      <Link to={`/overview/${part._id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
        <Card className="h-100 d-flex flex-column" style={{ width: '100%', maxWidth: '18rem' }}>
          <div className="p-3">
            {images.length > 1 ? (
              <Carousel interval={3000} indicators={true} className="custom-carousel">
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="d-block w-100"
                      style={{ height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : images.length === 1 && images[0] ? (
              <img
                src={images[0]}
                alt={part.partName}
                style={{ height: '200px', objectFit: 'cover', width: '100%', borderRadius: '8px' }}
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>

          <Card.Body className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="card-title mb-0">{part.partName}</h5>
              <span className="price">₹ {part.price}</span>
            </div>
            <Card.Text
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2,
                flexGrow: 1,
              }}
            >
              {part.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ChoicesItems;