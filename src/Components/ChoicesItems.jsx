

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoicesItems = ({ part, parts }) => {
  const images = Array.isArray(part.images) ? part.images : [part.images];

  // Function to extract file ID from various Google Drive URLs
  const extractFileId = (url) => {
    if (!url || typeof url !== 'string') return null;
    const match = url.match(/(?:file\/d\/|id=)([^\/?]+)/);
    return match ? match[1] : null;
  };

  // Function to generate direct link from Google Drive file ID
  const getDirectLink = (url) => {
    const fileId = extractFileId(url);
    return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : null;
  };

  return (
    <div>
      <Link to={`/overview/${part._id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '100%', maxWidth: '18rem' }}>
          <div className="p-3">
            {images.length > 0 && getDirectLink(images[0]) ? (
              <img
                src={getDirectLink(images[0])}
                alt={part.partName}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  width: '100%',
                  borderRadius: '8px'
                }}
              />
            ) : (
              <p>No Image Available</p> // Handle missing images
            )}
          </div>
          <Card.Body>
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
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ChoicesItems;
