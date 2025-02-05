// import { Icon } from "@iconify-icon/react/dist/iconify.js";
// import React, { useEffect, useState } from "react";
// import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
// import { globalStyles } from "../globalStyles";
// import ToggleCategoryBtn from "../reusablecomponents/ToggleCategoryBtn";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   setActiveButton,
// //   setActiveCondition,
// //   setAvailability,
// //   setCategory,
// //   setContactNumber,
// //   setDescription,
// //   setImage,
// //   setPartName,
// // } from "../redux/slices/ProductSlice";
// import { colors } from '../colors'

// import GoogleMapView from "./GoogleMapView";
// import SubmitButtons from "../reusablecomponents/SubmitButtons";
// import { startTransition } from "react";




// const AddButton = () => {
//   // call the action using dispatch
//   // const dispatch = useDispatch();
//   // access the state
//   // const {activeButton,activeCondition,availability,image,partName,category,description,contactNumber,} = useSelector((state) => state.productReducer);
//   const [productDetails, setProductDetails] = useState({
//         partName: "",
//         category: "",
//         condition: "",
//         brand: "",
//         price: "",
//         stockAvailability: "true", 
//         description: "",
//         contactNumber: "",
//         latitude: "12.9716", 
//         longitude: "77.5946", 
//         images: [],
//       });
//   console.log(productDetails);
  

//   // state for sidebar open and close
//   const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);

//   // state to update location
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   // array to store images
//  const [imageArray, setImageArray] = useState([])

//  //   array for categories
//  const categories = [
//   { label: "Car", value: 1 },
//   { label: "Bike", value: 2 },
//   { label: "Bus", value: 3 },
//   { label: "Cycle", value: 4 },
//   { label: "Scooty", value: 5 },
//   { label: "Others", value: 6 },
// ];

//  //   array for condition
//  const conditions = [
//   { label: "New", value: 1 },
//   { label: "Used", value: 2 },
// ]


//   // function to show sidebar
//   const handleAddProducts = () => {
//     setIsAddProductSidebarOpen(!isAddProductSidebarOpen);
//   };

  

 



//   // function to take input image
//   const handleImageChange = (e) => {
//     const files = e.target.files;
//     const newImageArray =[]

//  // Check if files is empty, if yes, don't show the alert
//  if (files.length === 0 || files.length >3) {
//   alert("Please select between 1 and 3")
//   return; // Exit if no files are selected
// }


//     // if(files.length <1 ){
//     //   alert("Please select between 1 and 3")
//     //   return
//     // }

//     for(let i=0;i<files.length;i++){
//       const file =files[i]
//       const imageURL = URL.createObjectURL(file)
//       newImageArray.push(imageURL)

//     }
//      // Update the imageArray by appending new images to the existing ones
//      setImageArray((prevImageArray) => {
//      const combinedArray = [...prevImageArray, ...newImageArray];
    
//     // Limit the array size to 3 images
//     if (combinedArray.length > 3) {
//       combinedArray.splice(0, combinedArray.length - 3); // Keep only the last 3 images
//     }

//      return combinedArray;
//     });
//     console.log(newImageArray);
    
    
//      dispatch(setImage([...imageArray, ...newImageArray]));
    
//   };


//    // Function to remove an image from the array
//    const handleRemoveImage = (index) => {
//     event.preventDefault(); 
//     const updatedArray = imageArray.filter((_, i) => i !== index);
//     setImageArray(updatedArray);
//   };


//   // function to change the availabilty radio button
//   const handleAvailabilityChange = (e) => {

//     dispatch(setAvailability(e.target.value));
//   };


 

//     // take value from input
//     const handleProductDetailsChange = (e) => {
//       const { name, value } = e.target;
//       setProductDetails({ ...productDetails, [name]: value });
//     };
  
    
//     const handleLocationSelect = (location) => {
//       setSelectedLocation(location);
//     };

//     const handleSubmit = async()=>{
//       const {partName,category,condition,brand,price,stockAvailability,description,contactNumber,latitude,longitude} = productDetails
//       console.log(productDetails);
      
//       if (partName && category && condition && brand && price && stockAvailability && description && contactNumber && latitude && longitude) {
//         const reqBody = new FormData()
//         reqBody.append("partName",partName)
//       reqBody.append("category",category)
//       reqBody.append("condition",condition)
//       reqBody.append("brand",brand)
//       reqBody.append("price",price)
//       reqBody.append("stockAvailability",stockAvailability)
//       reqBody.append("description",description)
//       reqBody.append("contactNumber",contactNumber)
//       reqBody.append("latitude",latitude)
//       reqBody.append("longitude",longitude)
      

//       const token = sessionStorage.getItem('token')

//       // if token present pass header
//       if(token){
//         const reqHeaders ={
//           "Content-Type":"multipart/form-data",
//           "Authorization":`Bearer ${token}`
//         }

//         // make api call
//         try {
//           const result = await addProjectAPI(reqBody,reqHeaders)
//           if(result.status==200){
//             alert("Project added successfully")
//             setAddProjectResponse(result)
//             handleClose()
//           }else{
//             alert(result.response.data)
//           }
          
//         } catch (error) {
//           console.log(error);
          
//         }

//       }
//     }else{
//       alert("Please fill the form completely")
//     }
  

      
//       }
    

    

//   return (
//     <>
//       <Button
//         onClick={handleAddProducts}
//         className="btn position-fixed bottom-0 end-0 m-4 ps-3 pe-3 shadow-lg"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           zIndex: 1,
//           backgroundColor: "#008E8E",
//           borderRadius: "50px",
//           border: "none",
//         }}
//       >
//         Add{" "}
//         <i
//           class="fa-solid fa-square-plus ms-2"
//           style={{ color: "#ffffff" }}
//         ></i>
//       </Button>

//       {/* *************************side bar****************************** */}
//       <Offcanvas
//         show={isAddProductSidebarOpen}
//         onHide={() => setIsAddProductSidebarOpen(false)}
//         placement="end"
//       >
//         <Offcanvas.Header closeButton className="border-bottom">
//           <Offcanvas.Title>Add Parts</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Form>
//             {/* *********Partname********** */}
//             <Form.Group className="mb-3" controlId="formPartName">
//               <Form.Label className="AddFontSize">Part Name</Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   type="text"
//                   // value={partName}
//                   // onChange={(e) => dispatch(setPartName(e.target.value))}
//                   value={productDetails.partName}
//                   onChange={e=>setProductDetails({...productDetails,partName:e.target.value})}
//                 />
//               </InputGroup>
//             </Form.Group>

//             {/* *********Category********** */}
//             <Form.Group className="mb-3">
//               <Form.Label className="AddFontSize">Category</Form.Label>
//               <div className="d-flex flex-wrap gap-2 mt-2">
//                 {categories.map((category) => (
//                   <ToggleCategoryBtn
//                     key={category.value}
//                     label={category.label}
//                     value={productDetails.category}
//                     onChange={e=>setProductDetails({...productDetails,category:e.target.value})}
//                     // activeButton={activeButton}
//                     // setActiveButton={(value) =>
//                     //   dispatch(setActiveButton(value))
//                     // }
//                     type="category"
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             {/* condition */}
//             <Form.Group className="mb-3">
//               <Form.Label className="AddFontSize">Condition</Form.Label>
//               <div className="d-flex flex-wrap gap-2 mt-2">
//                 {conditions.map((condition) => (
//                   <ToggleCategoryBtn
//                     key={condition.value}
//                     label={condition.label}
//                     value={productDetails.condition}
//                   onChange={e=>setProductDetails({...productDetails,condition:e.target.value})}
//                     // activeButton={activeCondition}
//                     // setActiveButton={(value) =>
//                     //   dispatch(setActiveCondition(value))
//                     // }
//                     type="condition"
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             {/* description  */}
//             <Form.Group className="mb-3">
//               <Form.Label className="AddFontSize">Description</Form.Label>
//               <Form.Control
//                 as={"textarea"}
//                 rows={3}
//                 value={productDetails.description}
//                 onChange={e=>setProductDetails({...productDetails,description:e.target.value})}
//               ></Form.Control>
//             </Form.Group>
//             {/* contact */}
//             <Form.Group className="mb-3">
//               <Form.Label className="AddFontSize">Contact Number</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={productDetails.contactNumber}
//                 onChange={e=>setProductDetails({...productDetails,contactNumber:e.target.value})}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="AddFontSize">Availability</Form.Label>
//               <div className="d-flex align-items-center gap-3 mt-2">
//                 <Form.Check
//                   type="radio"
//                   label="Yes"
//                   name="availability"
//                   value="available"
//                   id="available"
//                   checked={stockAvailability === "available"}
//                   onChange={handleAvailabilityChange}
//                 ></Form.Check>
//                 <Form.Check
//                   type="radio"
//                   label="No"
//                   name="availability"
//                   value="not-available"
//                   id="not-available"
//                   checked={stockAvailability === "not-available"}
//                   onChange={handleAvailabilityChange}
//                 ></Form.Check>
//               </div>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label className="AddFontSize">Images</Form.Label>

             
//               <div className="d-flex align-items-center justify-content-center">
//                 <label
//                   htmlFor="fileInput"
//                   className="btn d-flex align-items-center justify-content-center"
//                   style={globalStyles.AddPageButtonColr}
//                 >
//                   <Icon
//                     icon="solar:upload-bold"
//                     style={{ fontSize: "24px", color: "#000" }}
//                   ></Icon>
//                   Upload
//                 </label>
//                 <Form.Control
//                   id="fileInput"
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageChange}
//                   style={{ display: "none" }}
//                 />
//               </div>


//               {imageArray.length > 0 && (
//         <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
//           {imageArray.map((imgURL, index) => (
//             <div key={index} style={{ width: '200px', height: 'auto',position: 'relative', }}>
//               <img
//                 src={imgURL}
//                 alt={`Preview ${index }`}
//                 style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
//               />
//                {/* Close button */}
//                <button
//                 onClick={(event) => handleRemoveImage(index, event)}
//                 style={{
//                   position: 'absolute',
//                   top: '5px',
//                   right: '5px',
//                   background: 'red',
                  
//                   border: 'none',
//                   borderRadius: '50%',
//                   width: '25px',
//                   height: '25px',
//                   cursor: 'pointer',
//                   padding: '0',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Icon
//                   icon="solar:trash-bold"
//                   style={{
//                     fontSize: '16px',
//                     color: colors.White,
//                   }}
//                 />
//               </button>
//             </div>
//           ))}

//         </div>
//       )}
              
//             </Form.Group>
//           </Form>
//           {/* location */}
         
//           <div  style={{marginTop:'70px'}}>
          
//           <GoogleMapView selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect}/>
//           </div>
          
//          {/* submit button */}
//          <div className="mt-5"> <SubmitButtons onClick={handleSubmit}>Submit</SubmitButtons></div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default AddButton;






 




  
  


import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React, { useState } from "react";
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import GoogleMapView from "./GoogleMapView";
import SubmitButtons from "../reusablecomponents/SubmitButtons";
import { addPartsApi } from "../services/allAPI";

const AddButton = () => {
  const [productDetails, setProductDetails] = useState({
    partName: "",
    category: "",
    condition: "",
    brand: "",
    price: "",
    stockAvailability: "true", 
    description: "",
    contactNumber: "",
    latitude: "12.9716", 
    longitude: "77.5946", 
    images: [],
  });

  const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);

  const [imageArray, setImageArray] = useState([]);

  const [selectedLocation, setSelectedLocation] = useState(null);


  const categories = [
        { label: "Car", value: "Car" },
        { label: "Bike", value: "Bike" },
        { label: "Bus", value: "Bus" },
        { label: "Cycle", value: "Cycle" },
        { label: "Scooty", value: "Scooty" },
        { label: "Others", value: "Others" },
      ];
    
      const conditions = [
        { label: "New", value: "New" },
        { label: "Used", value: "Used" },
      ];

 

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   if (files.length === 0 || files.length > 3) {
  //     alert("Please select between 1 and 3 images");
  //     return;
  //   }
  //   setImageArray(files.slice(0, 3));
  //   setProductDetails((prevState) => ({ ...prevState, images: files.slice(0, 3) }));
  // };



  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  
  //   // Combine old and new images, ensuring a max of 3 images
  //   const updatedImages = [...imageArray, ...files].slice(0, 3);
  
  //   if (updatedImages.length === 0) {
  //     alert("Please select at least 1 image");
  //     return;
  //   }
  
  //   setImageArray(updatedImages);
  //   setProductDetails((prevState) => ({ ...prevState, images: updatedImages }));
  // };
  

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
  
    if (files.length === 0) {
      alert("Please select at least 1 image");
      return;
    }
  
    // Add new images while ensuring max 3 images
    const updatedImages = [...imageArray, ...files].slice(-3); // Keeps only the last 3 images
  
    setImageArray(updatedImages);
    setProductDetails((prevState) => ({ ...prevState, images: updatedImages }));
  };
  

  const handleRemoveImage = (index) => {
    const updatedArray = imageArray.filter((_, i) => i !== index);
    setImageArray(updatedArray);
    setProductDetails((prevState) => ({ ...prevState, images: updatedArray }));
  };

  const handleProductDetailsChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setProductDetails({ ...productDetails, latitude: location.lat, longitude: location.lng });
  };

  
  




  const handleSubmit = async () => {
    const {
      partName,
      category,
      condition,
      brand,
      price,
      stockAvailability,
      description,
      contactNumber,
      latitude,
      longitude
    } = productDetails;
  
    if (partName && category && condition && brand && price && stockAvailability && description && contactNumber && latitude && longitude) {
      const reqBody = new FormData();
      reqBody.append("partName", partName);
      reqBody.append("category", category);
      reqBody.append("condition", condition);
      reqBody.append("brand", brand);
      reqBody.append("price", price);
      reqBody.append("stockAvailability", stockAvailability);
      reqBody.append("description", description);
      reqBody.append("contactNumber", contactNumber);
      reqBody.append("latitude", latitude);
      reqBody.append("longitude", longitude);
      imageArray.forEach((image) => reqBody.append("images", image));
  
      // 🔹 Ensure headers are properly set
      const token = sessionStorage.getItem("token");
      const reqHeaders = {
        "Authorization": `Bearer ${token}`
      };
  
      try {
        const result = await addPartsApi(reqBody, reqHeaders);  // 🔹 Ensure headers are passed
        console.log("Server Response:", result);
        
  
        if (result.status === 201) {
          console.log("data:",result.data.carPart
          );
          
          alert("Part added successfully");
          setIsAddProductSidebarOpen(false);
        } else {
          alert(result.response.data);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      alert("Please fill the form completely");
    }
  };
  



  return (
    <>
      <Button onClick={() => setIsAddProductSidebarOpen(true)}>Add Part</Button>
      <Offcanvas show={isAddProductSidebarOpen} onHide={() => setIsAddProductSidebarOpen(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Parts</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group>
              <Form.Label>Part Name</Form.Label>
              <Form.Control type="text" name="partName" value={productDetails.partName} onChange={handleProductDetailsChange} />
            </Form.Group>
            
              {/* Category */}
           <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
               <div className="d-flex flex-wrap gap-2 mt-2">
                 {categories.map((category) => (
                  <label key={category.value}>
                    <input
                      type="radio"
                      name="category"
                      value={category.value}
                      checked={productDetails.category === category.label}
                      onChange={handleProductDetailsChange}
                    />
                     {category.label}
                  </label>
                ))}
              </div>
            </Form.Group>

             {/* Condition */}
            <Form.Group className="mb-3">
              <Form.Label>Condition</Form.Label>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {conditions.map((condition) => (
                  <label key={condition.value}>
                    <input
                      type="radio"
                      name="condition"
                      value={condition.value}
                      checked={productDetails.condition === condition.label}
                      onChange={handleProductDetailsChange}
                    />
                    {condition.label}
                  </label>
                ))}
              </div>
            </Form.Group>


            {/* Description */}
            <Form.Group className="mb-3">
               <Form.Label>Description</Form.Label>
               <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={productDetails.description}
                onChange={handleProductDetailsChange}
              />
            </Form.Group>

            {/* Contact Number */}
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                value={productDetails.contactNumber}
                onChange={handleProductDetailsChange}
              />
            </Form.Group>


            {/* Brand */}
           <Form.Group className="mb-3">
               <Form.Label>Brand</Form.Label>
               <Form.Control
                type="text"
                name="brand"
                value={productDetails.brand}
                onChange={handleProductDetailsChange}
              />
            </Form.Group>

            {/* Price */}
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={productDetails.price}
                onChange={handleProductDetailsChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" accept="image/*" multiple onChange={handleImageChange} />
              {imageArray.map((img, index) => (
                <div key={index}>
                  <img src={URL.createObjectURL(img)} alt={`Preview ${index}`} width={100} />
                  <button onClick={() => handleRemoveImage(index)}>Remove</button>
                </div>
              ))}
            </Form.Group>
            <GoogleMapView selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect} />
            <SubmitButtons onClick={handleSubmit}>Submit</SubmitButtons>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddButton;

