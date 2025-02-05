import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import { globalStyles } from "../globalStyles";
import ToggleCategoryBtn from "../reusablecomponents/ToggleCategoryBtn";
import { useDispatch, useSelector } from "react-redux";
 import {
   setActiveButton,
  setActiveCondition,
//   setAvailability,
//   setCategory,
//   setContactNumber,
//   setDescription,
//   setImage,
//   setPartName,
 } from "../redux/slices/ProductSlice";
import { colors } from '../colors'

import GoogleMapView from "./GoogleMapView";
import SubmitButtons from "../reusablecomponents/SubmitButtons";
import { startTransition } from "react";
import { addPartsApi } from "../services/allAPI";





const AddButton = () => {
  // call the action using dispatch
   const dispatch = useDispatch();
  // access the state
   const {activeButton,activeCondition,
  // availability,image,partName,category,description,contactNumber,
  } 
   = useSelector((state) => state.productReducer);
  const [productDetails, setProductDetails] = useState({
        partName: "",
        category: "",
        condition: "",
        brand: "",
        price: "",
        stockAvailability: "true", 
        description: "",
        contactNumber: "",
        latitude: "", 
        longitude: "", 
        images: [],
      });
  console.log(productDetails);
  

  // state for sidebar open and close
  const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);

  // state to update location
  const [selectedLocation, setSelectedLocation] = useState(null);

  // array to store images
 const [imageArray, setImageArray] = useState([])

 //   array for categories
 const categories = [
  { label: "Car", value: 1 },
  { label: "Bike", value: 2 },
  { label: "Bus", value: 3 },
  { label: "Cycle", value: 4 },
  { label: "Scooty", value: 5 },
  { label: "Others", value: 6 },
];

 //   array for condition
 const conditions = [
  { label: "New", value: 1 },
  { label: "Used", value: 2 },
]


  // function to show sidebar
  const handleAddProducts = () => {
    setIsAddProductSidebarOpen(!isAddProductSidebarOpen);
  };

  

 



  // function to take input image
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



   // Function to remove an image from the array
  //  const handleRemoveImage = (index) => {
  //   event.preventDefault(); 
  //   const updatedArray = imageArray.filter((_, i) => i !== index);
  //   setImageArray(updatedArray);
  // };

  const handleRemoveImage = (index) => {
    const updatedArray = imageArray.filter((_, i) => i !== index);
    setImageArray(updatedArray);
    setProductDetails((prevState) => ({ ...prevState, images: updatedArray }));
  };


  // function to change the availabilty radio button
  // const handleAvailabilityChange = (e) => {

  //   dispatch(setAvailability(e.target.value));
  // };


 

    // take value from input
    const handleProductDetailsChange = (e) => {
      const { name, value } = e.target;
      setProductDetails({ ...productDetails, [name]: value });
    };
  
    
    // const handleLocationSelect = (location) => {
    //   setSelectedLocation(location);
    // };

    const handleLocationSelect = (location) => {
      setSelectedLocation(location);
      setProductDetails({ ...productDetails, latitude: location.lat, longitude: location.lng });
    };

    // const handleSubmit = async()=>{
    //   const {partName,category,condition,brand,price,stockAvailability,description,contactNumber,latitude,longitude} = productDetails
    //   console.log(productDetails);
      
    //   if (partName && category && condition && brand && price && stockAvailability && description && contactNumber && latitude && longitude) {
    //     const reqBody = new FormData()
    //     reqBody.append("partName",partName)
    //   reqBody.append("category",category)
    //   reqBody.append("condition",condition)
    //   reqBody.append("brand",brand)
    //   reqBody.append("price",price)
    //   reqBody.append("stockAvailability",stockAvailability)
    //   reqBody.append("description",description)
    //   reqBody.append("contactNumber",contactNumber)
    //   reqBody.append("latitude",latitude)
    //   reqBody.append("longitude",longitude)
      

    //   const token = sessionStorage.getItem('token')

    //   // if token present pass header
    //   if(token){
    //     const reqHeaders ={
    //       "Content-Type":"multipart/form-data",
    //       "Authorization":`Bearer ${token}`
    //     }

    //     // make api call
    //     try {
    //       const result = await addProjectAPI(reqBody,reqHeaders)
    //       if(result.status==200){
    //         alert("Project added successfully")
    //         setAddProjectResponse(result)
    //         handleClose()
    //       }else{
    //         alert(result.response.data)
    //       }
          
    //     } catch (error) {
    //       console.log(error);
          
    //     }

    //   }
    // }else{
    //   alert("Please fill the form completely")
    // }
  

      
    //   }


    const handleCategoryChange = (value) => {
      dispatch(setActiveButton(value));
      setProductDetails((prev) => ({ ...prev, category: value }));
    };
    
    const handleConditionChange = (value) => {
      dispatch(setActiveCondition(value));
      setProductDetails((prev) => ({ ...prev, condition: value }));
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
      <Button
        onClick={handleAddProducts}
        className="btn position-fixed bottom-0 end-0 m-4 ps-3 pe-3 shadow-lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          backgroundColor: "#008E8E",
          borderRadius: "50px",
          border: "none",
        }}
      >
        Add{" "}
        <i
          class="fa-solid fa-square-plus ms-2"
          style={{ color: "#ffffff" }}
        ></i>
      </Button>

      {/* *************************side bar****************************** */}
      <Offcanvas
        show={isAddProductSidebarOpen}
        onHide={() => setIsAddProductSidebarOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title>Add Parts</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {/* *********Partname********** */}
            <Form.Group className="mb-3" controlId="formPartName">
              <Form.Label className="AddFontSize">Part Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="partName"
                   value={productDetails.partName}
                   onChange={handleProductDetailsChange}
                  // onChange={e=>setProductDetails({...productDetails,partName:e.target.value})}
                />
              </InputGroup>
            </Form.Group>

            {/* *********Category********** */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Category</Form.Label>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {categories.map((category) => (
                  <ToggleCategoryBtn
                    key={category.value}
                    label={category.label}
                    value={category.label}
                    // onChange={e=>setProductDetails({...productDetails,category:e.target.value})}
                    onChange={handleCategoryChange}

                    activeButton={activeButton}
                    //  setActiveButton={(value) =>
                    //    dispatch(setActiveButton(value))
                    //  }
                    setActiveButton={handleCategoryChange}
                    type="category"
                  />
                ))}
              </div>
            </Form.Group>

            {/* condition */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Condition</Form.Label>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {conditions.map((condition) => (
                  <ToggleCategoryBtn
                    key={condition.value}
                    label={condition.label}
                    value={condition.label}
                    // onChange={handleProductDetailsChange}
                    // checked={productDetails.condition === condition.label}


                  // onChange={e=>setProductDetails({...productDetails,condition:e.target.value})}
                    activeButton={activeCondition}
                    // setActiveButton={(value) =>
                    //   dispatch(setActiveCondition(value))
                    // }
                    setActiveButton={handleConditionChange}
                    type="condition"
                  />
                ))}
              </div>
            </Form.Group>

            {/* description  */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Description</Form.Label>
              <Form.Control
                as={"textarea"}
                name="description"
                rows={3}
                value={productDetails.description}
                // onChange={e=>setProductDetails({...productDetails,description:e.target.value})}
                onChange={handleProductDetailsChange}

              ></Form.Control>
            </Form.Group>

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






            {/* contact */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Contact Number</Form.Label>
              <Form.Control
                type="number"
                name="contactNumber" 
                value={productDetails.contactNumber}
                // onChange={e=>setProductDetails({...productDetails,contactNumber:e.target.value})}
                onChange={handleProductDetailsChange}

              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Availability</Form.Label>
              <div className="d-flex align-items-center gap-3 mt-2">
                {/* <Form.Check
                  type="radio"
                  label="Yes"
                  name="availability"
                  value="true"
                  id="available"
                  checked={stockAvailability === "available"}
                  onChange={handleAvailabilityChange}
                ></Form.Check> */}
                {/* <Form.Check
                  type="radio"
                  label="No"
                  name="availability"
                  value="false"
                  id="not-available"
                  checked={stockAvailability === "not-available"}
                  onChange={handleAvailabilityChange}
                ></Form.Check> */}

<Form.Check
  type="radio"
  label="Yes"
  name="stockAvailability"
  value="true"
  id="available"
  checked={productDetails.stockAvailability === "true"}
  onChange={handleProductDetailsChange}
/>
<Form.Check
  type="radio"
  label="No"
  name="stockAvailability"
  value="false"
  id="not-available"
  checked={productDetails.stockAvailability === "false"}
  onChange={handleProductDetailsChange}
/>

              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Images</Form.Label>

             
              <div className="d-flex align-items-center justify-content-center">
                <label
                  htmlFor="fileInput"
                  className="btn d-flex align-items-center justify-content-center"
                  style={globalStyles.AddPageButtonColr}
                >
                  <Icon
                    icon="solar:upload-bold"
                    style={{ fontSize: "24px", color: "#000" }}
                  ></Icon>
                  Upload
                </label>
                <Form.Control
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>


              {imageArray.length > 0 && (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
          {imageArray.map((imgURL, index) => (
            <div key={index} style={{ width: '200px', height: 'auto',position: 'relative', }}>
              <img
                // src={imgURL}
                src={URL.createObjectURL(imgURL)}
                alt={`Preview ${index }`}
                style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
              />
               {/* Close button */}
               <button
                onClick={(event) => handleRemoveImage(index, event)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'red',
                  
                  border: 'none',
                  borderRadius: '50%',
                  width: '25px',
                  height: '25px',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
               x
              </button>
            </div>
          ))}

        </div>
      )}
              
            </Form.Group>
          </Form>
          {/* location */}
         
          <div  style={{marginTop:'70px'}}>
          
          <GoogleMapView selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect}/>
          </div>
          
         {/* submit button */}
         <div className="mt-5"> <SubmitButtons onClick={handleSubmit}>Submit</SubmitButtons></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddButton;






 




  
  


