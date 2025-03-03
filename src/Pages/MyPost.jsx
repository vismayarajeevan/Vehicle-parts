
// import { Container, Row, Col, Card, Dropdown, Form } from 'react-bootstrap';
// import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';
//  import './Mypost.css'
// import Navbarcomp from '../Components/NavbarComp';
// import { useEffect, useState } from 'react';
// import { deleteuserPartsApi, displayuserPartsApi } from '../services/allAPI';
// import { debounce } from 'lodash';
// import { showToast } from '../reusablecomponents/Toast';




// function MyPost() {

//   // state to hold user product
//   const [userProduct, setUserProduct] = useState([])
  

//   // function to get user product
//   const getuserProduct = async()=>{
//     console.log("inside userproducts");

//     const token= sessionStorage.getItem('token')
//     console.log("token",token)
//     if(token){
//       const reqHeader ={
//         "Authorization":`Bearer ${token}`
//      }

//      try {
//       const result = await displayuserPartsApi(reqHeader)
//       console.log(result);
//       if(result.status == 200){
//         console.log(result.data);
//         setUserProduct(result.data.carParts)
       
      
        
//       } else {
//         console.error("API Error:", result);
//       }
      
//      } catch (error) {
//       console.log(error);
      
//      }
//     }else{
//        alert("Please login...")
//     }
    
//   }

//   useEffect(()=>{
//     getuserProduct()

    
//   },[])


 


//   useEffect(() => {
//     const sliders = document.querySelectorAll(".image-slider1");
  
//     sliders.forEach((slider) => {
//       const slides = slider.querySelectorAll(".slide-mypost");
//       const dots = slider.querySelectorAll(".dot");
//       let index = 0;
  
//       if (slides.length > 0) {
//         slides[0].classList.add("active");  // Set first slide active
//         dots[0].classList.add("active");    // Set first dot active
//       }
  
//       function showSlide(i) {
//         slides.forEach((slide, idx) => {
//           slide.classList.remove("active");
//           if (idx === i) {
//             slide.classList.add("active");
//           }
//         });
  
//         dots.forEach((dot, idx) => {
//           dot.classList.remove("active");
//           if (idx === i) {
//             dot.classList.add("active");
//           }
//         });
//       }
  
//       function nextSlide() {
//         index = (index + 1) % slides.length;
//         showSlide(index);
//       }
  
//       const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
  
//       return () => clearInterval(interval); // Cleanup on unmount
//     });
//   }, [userProduct]);

  


//   const handleSearch = debounce((value) => {
//     setSearchKey(value);
//   }, 500);


//   const handleDelete = async(id) => {
//     console.log("inside delete");
    
//     // take token
//     const token = sessionStorage.getItem('token')

//     console.log("token", token);
    
//     if(token){
//       const reqHeader ={
//         "Authorization":`Bearer ${token}`
//      }
//       try {
//         const result=await deleteuserPartsApi(id,reqHeader)
//         console.log(result);
//         if(result.status ==200){
//           showToast(`${result.data.message}`, "success");
//           getuserProduct()
//         }else{
//          showToast(`${result.response.data.message}`, "error");
//         }
        
        
        
        
//       } catch (error) {
//         console.log(error);
        
//       }
//     }
//   };

//   const handleEdit = (id) => {
//     console.log('Delete item:', id);
//   };

//   return (
// <>
// <Navbarcomp />
//       <Container className="py-5">
//         {userProduct?.length > 0 ? (
//           <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
//             {userProduct.map((product) => (
//               <Col key={product._id}>
//                 <Card className="h-100 position-relative">
//                   <div className="card-img-wrapper">

//                   <div className="image-slider1">
//                       <div className="slides">
//                         {product.images.map((img, index) => (
//                           <img key={index} src={img} className="slide-mypost" alt="product" />
//                         ))}
//                       </div>
//                       <div className="dots">
//                         {product.images.map((_, index) => (
//                           <span key={index} className="dot"></span>
//                         ))}
//                       </div>
//                     </div>
//                     {/* <Card.Img variant="top" src={product.images} /> */}
//                     <Dropdown className="card-dropdown">
//                       <Dropdown.Toggle variant="light" size="sm" className="no-arrow rounded-circle">
//                         <BsThreeDotsVertical />
//                       </Dropdown.Toggle>
//                       <Dropdown.Menu>
//                         <Dropdown.Item onClick={() => handleEdit(product._id)}>
//                           <BsPencilSquare className="me-2" /> Edit
//                         </Dropdown.Item>
//                         <Dropdown.Item onClick={() => handleDelete(product._id)} className="text-danger">
//                           <BsTrash className="me-2" /> Delete
//                         </Dropdown.Item>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                   </div>
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <h5 className="card-title mb-0">{product.partName}</h5>
//                       <span className="price">₹ {product.price}</span>
//                     </div>
//                     <Card.Text style={{
//                       display: '-webkit-box',
//                       WebkitBoxOrient: 'vertical',
//                       overflow: 'hidden',
//                       WebkitLineClamp: 2,
//                     }}>
//                       {product.description}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         ) : (
//           <div className="d-flex align-items-center justify-content-center" style={{ height: '50vh' }}>
//             <p className="text-center text-muted">No items found.</p>
//           </div>
//         )}
//       </Container>
    
// </>
//   );
// }




// export default MyPost;





import { Container, Row, Col, Card, Dropdown, Form } from 'react-bootstrap';
import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './Mypost.css'
import Navbarcomp from '../Components/NavbarComp';
import { useContext, useEffect, useState } from 'react';
import { deleteuserPartsApi, displayuserPartsApi } from '../services/allAPI';
import { debounce } from 'lodash';
import { showToast } from '../reusablecomponents/Toast';
import { SidebarContext } from '../context/SidebarProvider';
import ProductSidebar from '../reusablecomponents/ProductSidebar';




function MyPost() {

  const { isAddProductSidebarOpen, setIsAddProductSidebarOpen }  = useContext(SidebarContext);

  // state to hold user product
  const [userProduct, setUserProduct] = useState([])
  
  const [productToEdit, setProductToEdit] = useState(null); // State to hold the product to edit

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


 


  useEffect(() => {
    const sliders = document.querySelectorAll(".image-slider1");
  
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll(".slide-mypost");
      const dots = slider.querySelectorAll(".dot");
      let index = 0;
  
      if (slides.length > 0) {
        slides[0].classList.add("active");  // Set first slide active
        dots[0].classList.add("active");    // Set first dot active
      }
  
      function showSlide(i) {
        slides.forEach((slide, idx) => {
          slide.classList.remove("active");
          if (idx === i) {
            slide.classList.add("active");
          }
        });
  
        dots.forEach((dot, idx) => {
          dot.classList.remove("active");
          if (idx === i) {
            dot.classList.add("active");
          }
        });
      }
  
      function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
      }
  
      const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    });
  }, [userProduct]);

  


  const handleSearch = debounce((value) => {
    setSearchKey(value);
  }, 500);


  const handleDelete = async(id) => {
    console.log("inside delete");
    
    // take token
    const token = sessionStorage.getItem('token')

    console.log("token", token);
    
    if(token){
      const reqHeader ={
        "Authorization":`Bearer ${token}`
     }
      try {
        const result=await deleteuserPartsApi(id,reqHeader)
        console.log(result);
        showToast(`${result.data.message}`, "success");
        
        getuserProduct()
        
      } catch (error) {
        console.log(error);
        
      }
    }
  };

  const handleEdit = (product) => {
    console.log('edit item:', product);
    setProductToEdit(product); 
    setIsAddProductSidebarOpen(true)
  };

  return (
<>
<Navbarcomp />
      <Container className="py-5">
        {userProduct?.length > 0 ? (
          <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
            {userProduct.map((product) => (
              <Col key={product._id}>
                <Card className="h-100 position-relative">
                  <div className="card-img-wrapper">

                  <div className="image-slider1">
                      <div className="slides">
                        {product.images.map((img, index) => (
                          <img key={index} src={img} className="slide-mypost" alt="product" />
                        ))}
                      </div>
                      <div className="dots">
                        {product.images.map((_, index) => (
                          <span key={index} className="dot"></span>
                        ))}
                      </div>
                    </div>
                    {/* <Card.Img variant="top" src={product.images} /> */}
                    <Dropdown className="card-dropdown">
                      <Dropdown.Toggle variant="light" size="sm" className="no-arrow rounded-circle">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleEdit(product)}>
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
                    <Card.Text style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2,
                    }}>
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="d-flex align-items-center justify-content-center" style={{ height: '50vh' }}>
            <p className="text-center text-muted">No items found.</p>
          </div>
        )}
      </Container>
      {/* Render the ProductSidebar component */}
      {/* <ProductSidebar
        mode="edit"
        onClose={() => setIsAddProductSidebarOpen(false)}
        productToEdit={productToEdit}
        displayAllParts={getuserProduct}
      /> */}
    
    <ProductSidebar
  mode={productToEdit ? "edit" : "add"}
  onClose={() => setIsAddProductSidebarOpen(false)}
  productToEdit={productToEdit}
  displayAllParts={getuserProduct}
/>
</>
  );
}




export default MyPost;


