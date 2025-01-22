import React, { useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import choice_img from "../assets/choices.png";
import { colors } from "../colors";
import whatsapp_icon from '../assets/whatsapp.png'
import { useParams } from "react-router-dom";

const images = [
  'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80&w=800'
];

const Overview = () => {


  
  
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };
  




  return (
    
  //   <div className="row p-5" style={{
  //       height: "100vh",
  //       margin: "0",
  //       padding: "0",
  //       boxSizing: "border-box",
  //       overflow: "hidden",
  //     }}
  //   >
  //     <div className="col-lg-6">
  //       <div className="mb-3">
  //         <img
  //           src={choice_img}
  //           alt=""
  //           className="img-fluid"
  //           width={"500px"}
  //           height={"200px"}
  //         />
  //       </div>
  //       <div className="mb-2">
  //         <img
  //           src={choice_img}
  //           alt=""
  //           className="img-fluid"
  //           width={"400px"}
  //           height={"200px"}
  //         />
  //       </div>
  //       <div className="mb-2">
  //         <img
  //           src={choice_img}
  //           alt=""
  //           className="img-fluid"
  //           width={"400px"}
  //           height={"200px"}
  //         />
  //       </div>
  //     </div>
  //     <div className="col-lg-6 pe-5">
  //       <h1 style={{ fontWeight: "600" }}>Honda Civic Spoiler</h1>
  //       <p className="pt-4" style={{ fontWeight: "300" }}>
  //         Honda Civic Spoiler sdsd sdfdfsdsddwwwewewf fs df w dw wewewe wew
  //         sddsfwdv dds dwefwf dfdwd dwewewewewew wewewew . we w ewew wewewewe
  //         werwewewe . we.
  //       </p>
  //       <div className="d-flex justify-content-between align-items-center pb-4 pt-5">
  //         <div>
  //           <h3 className="pb-3" style={{ fontSize: "15px" }}>Category</h3>
  //           <button
  //             className="btn"
  //             style={{
  //               width: "68px",
  //               height: "35px",
  //               borderRadius: "20px",
  //               border: "none",
  //               backgroundColor: colors.CategoryActiveButton,
  //               color: colors.White,
  //               fontWeight: "600",
                
  //             }}
  //           >
  //             Car
  //           </button>
  //         </div>

  //          {/* Vertical Divider */}
  // <div
  //   style={{
  //     width: "1px",
  //     backgroundColor: "#ccc",
  //     height: "70px",
  //   }}
  // ></div>

  //         <div>
  //           <h3 className="pb-3" style={{ fontSize: "15px" }}>Category</h3>
  //           <button
  //             className="btn"
  //             style={{
  //               width: "68px",
  //               height: "35px",
  //               borderRadius: "20px",
  //               border: "none",
  //               backgroundColor: colors.ConditionActiveButton,
  //               color: "white",
  //               fontWeight: "600",
  //             }}
  //           >
  //             Car
  //           </button>
  //         </div>
  //       </div>
  //       <hr />

  //       <div className="mt-4">
  //       <h3 style={{fontSize:'20px',fontWeight:'600'}}>Brand:- <span className="ms-2" style={{fontWeight:'400',fontSize:'17px'}}>Honda</span></h3>
  //     </div>
  //     <div className="mt-4" style={{width:'700px',height:'100px', backgroundColor:'grey'}}>
  //       Add
  //     </div>

  //    <div className="w-100 d-flex"  style={{
  //   justifyContent: 'flex-end',
  //   position: 'fixed',
  //   bottom: '20px',
  //   right: '20px',
  // }}>
  //       <button className="btn mt-5"
  //       onClick={()=>{
  //         const phoneNumber ="1234567890"
  //         const whatsappURL = `https://wa.me/${phoneNumber}`
  //         window.open(whatsappURL, "_blank");

  //       }}>
  //       <img src={whatsapp_icon} alt="" width={'50px'} className="img-fluid" />
  //     </button>
  //    </div>
  //     </div>

   
  //   </div>
  <Container fluid className="p-5" style={{ overflowX: 'hidden' }} >

<Row className="g-4">
      <Col md={6}>
        <div 
          className="position-relative overflow-hidden rounded"
          style={{ height: '400px' }}
          onWheel={handleScroll}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product view ${index + 1}`}
              className="position-absolute w-100 h-100"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                transform: `translateY(${(index - currentImageIndex) * 100}%)`,
              }}
            />
          ))}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
            <div className="d-flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-circle ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-white'
                  }`}
                  style={{ width: '8px', height: '8px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <h1>Honda Civic Spoiler</h1>
        <p className="text-muted mb-5">
          High-quality spoiler designed specifically for Honda Civic models. 
          Enhances aerodynamics and adds a sporty look to your vehicle.
        </p>

        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-evenly gap-3 mb-3">
            <div className="text-center">
              <small className="text-muted d-block mb-2">Category</small>
              <Badge bg="info">Car</Badge>
            </div>

                     {/* Vertical Divider */}
            <div style={{width: "1px",backgroundColor: "#ccc",height: "70px",}}></div>
            <div className="text-center">
              <small className="text-muted d-block mb-2">Condition</small>
              <Badge bg="warning">New</Badge>
            </div>
          </div>
         <hr />
          <div className="d-flex align-items-center gap-2">
            <small className="d-block" style={{fontWeight:'600',fontSize:'20px'}}>Brand:-</small>
            <span className="text-muted">Honda</span>
          </div>
        </div>



       <div className="w-100 d-flex"  style={{justifyContent: 'flex-end', position: 'fixed',bottom: '20px',right: '20px',}}>
        <Button className="btn mt-5" style={{backgroundColor:'transparent', border:'none'}}
            href="https://wa.me/1234567890"
            target="_blank">
        <img src={whatsapp_icon} alt="" width={'50px'} className="img-fluid" />
      </Button>
     </div>

      </Col>
    </Row>

</Container>
    
  );
};

export default Overview;
