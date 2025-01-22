import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import { globalStyles } from "../globalStyles";
import ToggleCategoryBtn from "../reusablecomponents/ToggleCategoryBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveButton,
  setActiveCondition,
  setAvailability,
  setCategory,
  setContactNumber,
  setDescription,
  setImage,
  setPartName,
} from "../redux/slices/ProductSlice";
import { colors } from '../colors'

import GoogleMapView from "./GoogleMapView";




const AddButton = () => {
  // call the action using dispatch
  const dispatch = useDispatch();
  // access the state
  const {activeButton,activeCondition,availability,image,partName,category,description,contactNumber,} = useSelector((state) => state.productReducer);

  // state for sidebar open and close
  const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);

  // function to show sidebar
  const handleAddProducts = () => {
    setIsAddProductSidebarOpen(!isAddProductSidebarOpen);
  };

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
  ];

// array to store images
 const [imageArray, setImageArray] = useState([])

  // function to take input image
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImageArray =[]

 // Check if files is empty, if yes, don't show the alert
 if (files.length === 0) {
  return; // Exit if no files are selected
}


    if(files.length <1 || files.length >3){
      alert("Please select between 1 and 3")
      return
    }

    for(let i=0;i<files.length;i++){
      const file =files[i]
      const imageURL = URL.createObjectURL(file)
      newImageArray.push(imageURL)

    }
     // Update the imageArray by appending new images to the existing ones
     setImageArray((prevImageArray) => {
     const combinedArray = [...prevImageArray, ...newImageArray];
    
    // Limit the array size to 3 images
    if (combinedArray.length > 3) {
      combinedArray.splice(0, combinedArray.length - 3); // Keep only the last 3 images
    }

     return combinedArray;
    });
    console.log(newImageArray);
    
    
     dispatch(setImage([...imageArray, ...newImageArray]));
    
  };


  // function to change the availabilty radio button
  const handleAvailabilityChange = (e) => {

    dispatch(setAvailability(e.target.value));
  };


  // Function to remove an image from the array
    const handleRemoveImage = (index) => {
      event.preventDefault(); 
      const updatedArray = imageArray.filter((_, i) => i !== index);
      setImageArray(updatedArray);
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
                  value={partName}
                  onChange={(e) => dispatch(setPartName(e.target.value))}
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
                    value={category.value}
                    activeButton={activeButton}
                    setActiveButton={(value) =>
                      dispatch(setActiveButton(value))
                    }
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
                    value={condition.value}
                    activeButton={activeCondition}
                    setActiveButton={(value) =>
                      dispatch(setActiveCondition(value))
                    }
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
                rows={3}
                value={description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
              ></Form.Control>
            </Form.Group>
            {/* contact */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Contact Number</Form.Label>
              <Form.Control
                type="number"
                value={contactNumber}
                onChange={(e) => dispatch(setContactNumber(e.target.value))}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Availability</Form.Label>
              <div className="d-flex align-items-center gap-3 mt-2">
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="availability"
                  value="available"
                  id="available"
                  checked={availability === "available"}
                  onChange={handleAvailabilityChange}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="No"
                  name="availability"
                  value="not-available"
                  id="not-available"
                  checked={availability === "not-available"}
                  onChange={handleAvailabilityChange}
                ></Form.Check>
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
                src={imgURL}
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
                <Icon
                  icon="solar:trash-bold"
                  style={{
                    fontSize: '16px',
                    color: colors.White,
                  }}
                />
              </button>
            </div>
          ))}

        </div>
      )}
              
            </Form.Group>
          </Form>
          {/* location */}
         
          <div>
          <h3 className="AddFontSize" style={{marginTop:'70px'}}>Location</h3>
          <GoogleMapView />
          </div>
          
          <button className="p-2 mt-5 w-100 rounded" style={{backgroundColor:colors.CategoryActiveButton, color:colors.White, border:'none', fontWeight:"600"}}>Submit</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddButton;
