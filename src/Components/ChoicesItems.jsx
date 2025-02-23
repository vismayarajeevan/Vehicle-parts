


import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoicesItems = ({ part, parts }) => {
  const images = Array.isArray(part.images) ? part.images : [part.images];

  return (
    <div>
      <Link to={`/overview/${part._id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
        <Card className="h-100 d-flex flex-column" style={{ width: '100%', maxWidth: '18rem' }}>
          <div className="p-3">
            {images.length > 0 && images[0] ? (
              <img
                src={images[0]} // Direct image URL
                alt={part.partName}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: '8px',
                }}
              />
            ) : (
              <p>No Image Available</p> 
            )}
          </div>
          {/* <Card.Body>
            <Card.Title style={{ fontWeight: '600', fontSize: '18px' }}>{part.partName}</Card.Title>
            <span style={{ fontWeight: '800' }}>₹ {part.price}</span>
            <Card.Text
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2,
              }}
            >
              {part.description}
            </Card.Text>
          </Card.Body> */}
          

          <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{part.partName}</h5>
                    <span className="price">₹ {part.price}</span>
                  </div>
                  <Card.Text style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2,
                    flexGrow: 1,  
                  }}>
                    {part.description}
                    </Card.Text>
                </Card.Body>

        </Card>
      </Link>
    </div>
  );
};

export default ChoicesItems;

