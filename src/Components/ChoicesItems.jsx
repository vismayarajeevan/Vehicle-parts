
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoiceItems = ({ part, parts }) => {
    const images = Array.isArray(part.images) ? part.images : [part.images];

    return (
        <div style={{ width: '100%', maxWidth: '19rem' }}>
            <Link to={`/overview/${part._id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="p-3">
                        {images.length > 1 ? (
                            <Carousel interval={3000} pause="hover">
                                {images.map((img, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            src={img}
                                            alt={part.partName}
                                            style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                width: '100%',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : images.length === 1 && images[0] ? (
                            <img
                                src={images[0]}
                                alt={part.partName}
                                style={{
                                    height: '200px',
                                    objectFit: 'cover',
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                    <Card.Body style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {/* <div>
                            <Card.Title style={{ fontWeight: '600', fontSize: '18px' }}>{part.partName}</Card.Title>
                            <span style={{ fontWeight: '800' }}>₹ {part.price}</span>
                        </div> */}

<div className="d-flex justify-content-between align-items-center mb-2" style={{ gap: '10px' }}>
    <h5 className="card-title mb-0 text-truncate" style={{ flex: 1, fontSize: '1rem' }}>
      {part.partName}
    </h5>
    <span className="price" style={{ flexShrink: 0, fontSize: '1rem', fontWeight: '600' }}>
      ₹ {part.price}
    </span>
  </div>
                        <Card.Text
                            style={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                WebkitLineClamp: 1,
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

export default ChoiceItems;

