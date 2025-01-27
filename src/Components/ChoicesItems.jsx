
// import React from 'react'
// import { Card } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'



// const ChoicesItems = ({part, parts  }) => {
//     const navigate = useNavigate();
//   return (
//     <div>
//          <Link to={`/overview/${part.id}`}  state={{ part, parts  }}   style={{textDecoration:'none'}}>
//     <Card style={{ width: '100%', maxWidth: '18rem' }}>
//       <div className='p-3'>
//          <Card.Img variant="top" src={part.image} style={{height:'200px',objectFit:'cover', width:'100%'}}/>
//   </div>
     
//        <Card.Body>
//          <Card.Title style={{fontWeight:'600', fontSize:"18px"}}>{part.name}</Card.Title>
//          <span style={{fontWeight:'8000'}}>₹ {part.price}</span>
//          <Card.Text style={{ display: '-webkit-box',WebkitBoxOrient: 'vertical',overflow: 'hidden',WebkitLineClamp: 2,}}>
//            Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>   
//       </Card.Body>
//      </Card>
//      </Link>
//     </div>
//   )
// }

// export default ChoicesItems
import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoicesItems = ({ part, parts }) => {
  const images = Array.isArray(part.image) ? part.image : [part.image];

  return (
    <div>
      <Link to={`/overview/${part.id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '100%', maxWidth: '18rem' }}>
          <div className="p-3">
            {images.length > 1 ? (
              <Carousel indicators controls={false} interval={3000}>
                {images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        width: '100%',
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img
                src={images[0]}
                alt={part.name}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
            )}
          </div>
          <Card.Body>
            <Card.Title style={{ fontWeight: '600', fontSize: '18px' }}>{part.name}</Card.Title>
            <span style={{ fontWeight: '800' }}>₹ {part.price}</span>
            <Card.Text
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2,
              }}
            >
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ChoicesItems;
