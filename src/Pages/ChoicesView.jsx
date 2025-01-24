import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row,Offcanvas } from "react-bootstrap";
import filter from "../assets/filter.png";
import ChoicesItems from "../Components/ChoicesItems";

const ChoicesView = () => {


  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
     
    



    // <div>
    //   <div className="d-flex align-items-center justify-content-between p-4">
    //     <Form>
    //       <Form.Control
    //         type="search"
    //         placeholder="Search here..."
    //         style={{ width: "300px", border: "none", background: "#F0F0F0" }}
    //         aria-label="Search"
    //       />
    //     </Form>
    //     <div>
    //       <img src={filter} alt="" className="img-fluid" width={"30px"} onClick={handleShow} />
    //     </div>
    //   </div>

    //   {/* cards */}
    //   <Container fluid className="p-4">
    //     <Row>
    //       <Col lg={4} md={4} sm={12}>
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src="holder.js/100px180" />
    //           <Card.Body>
    //             <Card.Title>Card Title</Card.Title>
    //             <Card.Text>
    //               Some quick example text to build on the card title and make up
    //               the bulk of the card's content.
    //             </Card.Text>
    //             <Button variant="primary">Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
      

    //    {/* Offcanvas Bar */}
    //    <Offcanvas
    //     show={show}
    //     onHide={handleClose}
    //     placement="bottom"
    //     style={{ height: "50vh" }}
    //     className="rounded"
    //   >
    //     <Offcanvas.Header  style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         position: "relative",
    //       }}> 
    //         {/* Custom Close Button */}
    //         <Button
    //         onClick={handleClose}
    //         style={{
    //           backgroundColor: "red",
    //           color: "white",
    //           border: "none",
    //           position: "absolute",
    //           left: "15px",
    //           top: "15px",
    //           borderRadius: "50%",
    //           width: "30px",
    //           height: "30px",
    //           textAlign: "center",
    //           padding: "0",
    //         }}
    //       >
    //         &times;
    //       </Button>
    //       <Offcanvas.Title className="text-center">Filter</Offcanvas.Title>
    //     </Offcanvas.Header>

    //     <hr />
    //     <Offcanvas.Body>
    //       <p>Here you can add filter options or other content.</p>
    //       {/* Example filter options */}
          
    //     </Offcanvas.Body>
    //   </Offcanvas>
    // </div>

<div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search parts..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button
          onClick={() => setShowFilter(true)}
          className="ml-4 p-2 rounded-lg bg-blue-600 text-white flex items-center"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span className="ml-2">Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parts.map(part => (
          <ChoicesItems key={part.id} part={part} />
        ))}
      </div>
      </div>


  );
};

export default ChoicesView;
