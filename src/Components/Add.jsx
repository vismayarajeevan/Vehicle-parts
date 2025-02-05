import React, { useState } from 'react'
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import GoogleMapView from "./GoogleMapView";
import SubmitButtons from "../reusablecomponents/SubmitButtons";
import { Icon } from 'lucide-react';



const Add = () => {
  
    const [productDetails, setProductDetails] = useState({
      partName: "",
      category: "",
      condition: "",
      brand: "",
      price: "",
      stockAvailability: "true",  // Default to "available"
      description: "",
      contactNumber: "",
      latitude: "12.9716",  // Dummy latitude
      longitude: "77.5946",  // Dummy longitude
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

      // to open sidebar

      const handleAddProducts = () => {
        setIsAddProductSidebarOpen(!isAddProductSidebarOpen);
      };

      const handleImageChange = (e) => {
        const files = e.target.files;
        const newImageArray = [];
      
        if (files.length === 0) return;
      
        if (files.length < 1 || files.length > 3) {
          alert("Please select between 1 and 3 images");
          return;
        }
      
        // Collect new files
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          
          newImageArray.push(file); // Store the actual file object
        }
      
        // Limit the array size to 3 images
        const combinedArray = [...imageArray, ...newImageArray];
        if (combinedArray.length > 3) {
          combinedArray.splice(0, combinedArray.length - 3);
        }
      
        // Update the imageArray state
        setImageArray(combinedArray);
      
        // Correctly update the images in productDetails
        setProductDetails((prevState) => {
          const updatedState = {
            ...prevState,
            images: [...prevState.images, ...newImageArray],
          };
      
          console.log("Updated productDetails:", updatedState); // Log the updated state
          return updatedState;
        });
      };
      
    
      const handleRemoveImage = (index) => {
        const updatedArray = imageArray.filter((_, i) => i !== index);
        setImageArray(updatedArray);
      };
    
     
      const handleProductDetailsChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name} to ${value}`); // Add a log to track changes
        setProductDetails({ ...productDetails, [name]: value });
      };
      
    
      const handleLocationSelect = (location) => {
        setSelectedLocation(location);
      };

      const handleSubmit =()=>{
        console.log("Inside submit");
        
      }
    
  return (
    <>
        <Button
            onClick={handleAddProducts}
            className="btn position-fixed bottom-0 end-0 m-4 ps-3 pe-3 shadow-lg"
            style={{
              backgroundColor: "#008E8E",
              borderRadius: "50px",
              border: "none",
            }}
          >
            Add{" "}
            <i className="fa-solid fa-square-plus ms-2" style={{ color: "#ffffff" }}></i>
          </Button>
    
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
                {/* PartName */}
                <Form.Group className="mb-3">
                  <Form.Label>Part Name</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      name="partName"
                      value={productDetails.partName}
                      onChange={handleProductDetailsChange}
                    />
                  </InputGroup>
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
                          checked={productDetails.category === category.value}
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
                          checked={productDetails.condition === condition.value}
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
    
                {/* Availability */}
                <Form.Group className="mb-3">
                  <Form.Label>Availability</Form.Label>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="stockAvailability"
                      value="true"
                      checked={productDetails.stockAvailability === "true"}
                      onChange={handleProductDetailsChange}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="stockAvailability"
                      value="false"
                      checked={productDetails.stockAvailability === "false"}
                      onChange={handleProductDetailsChange}
                    />
                  </div>
                </Form.Group>
    
                {/* Image Upload */}
                <Form.Group className="mb-3">
                  <Form.Label>Images</Form.Label>
                  <div className="d-flex align-items-center justify-content-center">
                    <label
                      htmlFor="fileInput"
                      className="btn d-flex align-items-center justify-content-center"
                    >
                      <Icon icon="solar:upload-bold" style={{ fontSize: "24px", color: "#000" }} />
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
                </Form.Group>
    
                {/* Display uploaded images */}
                {imageArray.length > 0 && (
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                    {imageArray.map((img, index) => (
                      <div key={index} style={{ width: '200px', height: 'auto', position: 'relative' }}>
                    <input type="file" onChange={e=>setProductDetails({...productDetails,images:e.target.files[0]})} style={{display:'none'}}/>
    
                        <img
                          src={URL.createObjectURL(img)}
                          alt={`Preview ${index}`}
                          style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
                        />
                        <button
                          onClick={() => handleRemoveImage(index)}
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
                          }}
                        >
                          <Icon
                            icon="solar:trash-bold"
                            style={{
                              fontSize: '16px',
                              color: 'white',
                            }}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
    
                {/* Google Map */}
                <GoogleMapView selectedLocation={selectedLocation} onLocationSelect={handleLocationSelect} />
    
                {/* Submit Button */}
                <div className="mt-5">
                  <SubmitButtons onClick={handleSubmit}>Submit</SubmitButtons>
                </div>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
    </>
  )
}

export default Add