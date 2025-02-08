
// // import React from 'react';
// // import { Card, Carousel } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';

// // const ChoicesItems = ({ part, parts }) => {
// //   const images = Array.isArray(part.image) ? part.image : [part.image];

// //   // Function to generate direct link from Google Drive file ID
// //   const getDirectLink = (fileId) => {
// //     return `https://drive.google.com/uc?export=view&id=${fileId}`;
// //   };

// //   return (
// //     <div>
// //       <Link to={`/overview/${part.id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
// //         <Card style={{ width: '100%', maxWidth: '18rem' }}>
// //           <div className="p-3">
// //             {images.length > 1 ? (
// //               <Carousel indicators controls={false} interval={3000}>
// //                 {images.map((img, index) => (
// //                   <Carousel.Item key={index}>
// //                     <img
// //                       src={getDirectLink(img)}
// //                       alt={`Slide ${index + 1}`}
// //                       style={{
// //                         height: '200px',
// //                         objectFit: 'cover',
// //                         width: '100%',
// //                       }}
// //                     />
// //                   </Carousel.Item>
// //                 ))}
// //               </Carousel>
// //             ) : (
// //               <img
// //                 src={getDirectLink(images[0])}
// //                 alt={part.name}
// //                 style={{
// //                   height: '200px',
// //                   objectFit: 'cover',
// //                   width: '100%',
// //                 }}
// //               />
// //             )}
// //           </div>
// //           <Card.Body>
// //             <Card.Title style={{ fontWeight: '600', fontSize: '18px' }}>{part.partName}</Card.Title>
// //             <span style={{ fontWeight: '800' }}>₹ {part.price}</span>
// //             <Card.Text
// //               style={{
// //                 display: '-webkit-box',
// //                 WebkitBoxOrient: 'vertical',
// //                 overflow: 'hidden',
// //                 WebkitLineClamp: 2,
// //               }}
// //             >
// //               {part.description}
// //             </Card.Text>
// //           </Card.Body>
// //         </Card>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default ChoicesItems;


// import React from 'react';
// import { Card, Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const ChoicesItems = ({ part, parts }) => {
//   const images = Array.isArray(part.images) ? part.images : [part.images];

//   // Function to extract fileId from Google Drive URL
//   const extractFileId = (url) => {
//     if (!url || typeof url !== 'string') return null;
//     const match = url.match(/\/file\/d\/([^\/]+)/);
//     return match ? match[1] : null;
//   };

//   // Function to generate direct link from Google Drive file ID
//   const getDirectLink = (url) => {
//     const fileId = extractFileId(url);
//     return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : null;
//   };

//   return (
//     <div>
//       <Link to={`/overview/${part._id}`} state={{ part, parts }} style={{ textDecoration: 'none' }}>
//         <Card style={{ width: '100%', maxWidth: '18rem' }}>
//           <div className="p-3">
//             {images.length > 1 ? (
//               <Carousel indicators controls={false} interval={3000}>
//                 {images.map((img, index) => {
//                   const directLink = getDirectLink(img);
//                   return directLink ? (
//                     <Carousel.Item key={index}>
//                       <img
//                         src={directLink}
//                         alt={`Slide ${index + 1}`}
//                         style={{
//                           height: '200px',
//                           objectFit: 'cover',
//                           width: '100%',
//                         }}
//                       />
//                     </Carousel.Item>
//                   ) : null;
//                 })}
//               </Carousel>
//             ) : (
//               <img
//                 src={getDirectLink(images[0])}
//                 alt={part.partName}
//                 style={{
//                   height: '200px',
//                   objectFit: 'cover',
//                   width: '100%',
//                 }}
//               />
//             )}
//           </div>
//           <Card.Body>
//             <Card.Title style={{ fontWeight: '600', fontSize: '18px' }}>{part.partName}</Card.Title>
//             <span style={{ fontWeight: '800' }}>₹ {part.price}</span>
//             <Card.Text
//               style={{
//                 display: '-webkit-box',
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//                 WebkitLineClamp: 2,
//               }}
//             >
//               {part.description}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Link>
//     </div>
//   );
// };

// export default ChoicesItems;

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
