
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
                        <div>
                            <Card.Title style={{ fontWeight: '600', fontSize: '18px' }}>{part.partName}</Card.Title>
                            <span style={{ fontWeight: '800' }}>₹ {part.price}</span>
                        </div>
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
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default ChoiceItems;

