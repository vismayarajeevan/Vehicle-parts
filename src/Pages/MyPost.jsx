
import { Container, Row, Col, Card, Dropdown, Form } from 'react-bootstrap';
import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './Mypost.css'
import Navbarcomp from '../Components/NavbarComp';
import { useEffect, useState } from 'react';
import { displayuserPartsApi } from '../services/allAPI';
import { debounce } from 'lodash';




function MyPost() {

  // state to hold user product
  const [userProduct, setUserProduct] = useState([])
  

  // function to get user product
  const getuserProduct = async()=>{
    console.log("inside userproducts");

    const token= sessionStorage.getItem('token')
    console.log("token",token)
    if(token){
      const reqHeader ={
        "Authorization":`Bearer ${token}`
     }

     try {
      const result = await displayuserPartsApi(reqHeader)
      console.log(result);
      if(result.status == 200){
        console.log(result.data);
        setUserProduct(result.data.carParts)
       
      
        
      } else {
        console.error("API Error:", result);
      }
      
     } catch (error) {
      console.log(error);
      
     }
    }else{
       alert("Please login...")
    }
    
  }

  useEffect(()=>{
    getuserProduct()
  },[])

  const handleSearch = debounce((value) => {
    setSearchKey(value);
  }, 500);


  // const handleEdit = (id) => {
  //   console.log('Edit item:', id);
  // };

  // const handleDelete = (id) => {
  //   console.log('Delete item:', id);
  // };

  return (
<>
    <Navbarcomp />
      <Container className="py-5">
      
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
          {userProduct.map((product) => (
            <Col key={product._id}>
              <Card className="h-100 position-relative">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={product.images} />
                  <Dropdown className="card-dropdown">
                    <Dropdown.Toggle variant="light" size="sm" className="no-arrow rounded-circle">
                      <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEdit(product._id)}>
                        <BsPencilSquare className="me-2" /> Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(product._id)} className="text-danger">
                        <BsTrash className="me-2" /> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

  
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{product.partName}</h5>
                    <span className="price">₹ {product.price}</span>
                  </div>
                  <Card.Text>{product.description
                  }</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
</>
  );
}




export default MyPost;