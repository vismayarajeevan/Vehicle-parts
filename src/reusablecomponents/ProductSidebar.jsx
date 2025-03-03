import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Offcanvas, Form, Button, Spinner } from "react-bootstrap";
import { SidebarContext } from "../context/SidebarProvider";
import { useDispatch, useSelector } from "react-redux";
import { addPartsApi,edituserPartsApi } from "../services/allAPI";
import { showToast } from "../reusablecomponents/Toast";
import { addPart } from "../redux/slices/ProductSlice";
import SubmitButtons from "./SubmitButtons";
import GoogleMapView from "../Components/GoogleMapView";
import ToggleCategoryBtn from "./ToggleCategoryBtn";
 import { globalStyles } from "../globalStyles";

import {
    setActiveButton,
    setActiveCondition,
    resetActiveButton,
    resetActiveCondition,
  } from "../redux/slices/ProductSlice";
  


const ProductSidebar = ({ mode, onClose, productToEdit, displayAllParts }) => {
  const { isAddProductSidebarOpen, setIsAddProductSidebarOpen } = useContext(SidebarContext);
  const dispatch = useDispatch();


//   // access the state
   const { activeButton, activeCondition} = useSelector((state) => state.productReducer);

  // State for product details
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

  // State for errors
  const [errors, setErrors] = useState({});

  // State for loading
  const [isLoading, setIsLoading] = useState(false);

   // state to update location
   const [selectedLocation, setSelectedLocation] = useState(null);
// array to store images
   const [imageArray, setImageArray] = useState([]);

  // Initialize form with productToEdit if in edit mode
  
  useEffect(() => {
    if (mode === "edit" && productToEdit) {
      setProductDetails({
        partName: productToEdit.partName,
        category: productToEdit.category,
        condition: productToEdit.condition,
        brand: productToEdit.brand,
        price: productToEdit.price,
        stockAvailability: productToEdit.stockAvailability,
        description: productToEdit.description,
        contactNumber: productToEdit.contactNumber,
        latitude: productToEdit.latitude,
        longitude: productToEdit.longitude,
        images: productToEdit.images, // Ensure images are correctly set
      });
      setImageArray(productToEdit.images); // Set imageArray for image previews
      setSelectedLocation({ lat: productToEdit.latitude, lng: productToEdit.longitude }); // Set selectedLocation for the map
      dispatch(setActiveButton(productToEdit.category)); // Set active category
      dispatch(setActiveCondition(productToEdit.condition)); // Set active condition
    } else {
      setProductDetails({
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
      setImageArray([]);
      setSelectedLocation(null);
      dispatch(resetActiveButton());
      dispatch(resetActiveCondition());
    }
  }, [mode, productToEdit]);



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

 



      const [imageFiles, setImageFiles] = useState([]); // Add this state





const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  if (files.length === 0) {
    alert("Please select at least 1 image");
    return;
  }

  const updatedImages = [];
  const updatedFiles = [];

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      updatedImages.push(reader.result); // Store base64 string for preview
      updatedFiles.push(file); // Store File object for FormData

      if (updatedImages.length === files.length) {
        setImageArray((prev) => [...prev, ...updatedImages].slice(-3)); // Keep only the last 3 images
        setImageFiles((prev) => [...prev, ...updatedFiles].slice(-3)); // Keep only the last 3 files
        setProductDetails((prevState) => ({
          ...prevState,
          images: [...prevState.images, ...updatedImages].slice(-3), // Update productDetails with base64 strings
        }));

        console.log("Updated Files:", updatedFiles); // Debugging: Check File objects
      }
    };
    reader.readAsDataURL(file); // Convert file to base64
  });
};


const handleRemoveImage = (index) => {
  const updatedArray = imageArray.filter((_, i) => i !== index);
  const updatedFiles = imageFiles.filter((_, i) => i !== index);

  setImageArray(updatedArray);
  setImageFiles(updatedFiles);
  setProductDetails((prevState) => ({ ...prevState, images: updatedArray }));
};

  const handleCategoryChange = (value) => {
        dispatch(setActiveButton(value));
        setProductDetails((prev) => ({ ...prev, category: value }));
      };
    
      const handleConditionChange = (value) => {
        dispatch(setActiveCondition(value));
        setProductDetails((prev) => ({ ...prev, condition: value }));
      };

      const handleProductDetailsChange = (e) => {
            const { name, value } = e.target;
            setProductDetails({ ...productDetails, [name]: value });
          };
        
          const handleLocationSelect = (location) => {
            setSelectedLocation(location);
            setProductDetails({
              ...productDetails,
              latitude: location.lat,
              longitude: location.lng,
            });
          };
        

  

  




const handleSubmit = async () => {
  if (!validateForm()) return;
  setIsLoading(true);

  console.log("Image Files:", imageFiles); // Debugging: Check File objects before creating FormData

  const { partName, category, condition, brand, price, stockAvailability, description, contactNumber, latitude, longitude } = productDetails;

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

  // Append File objects instead of base64 strings
  imageFiles.forEach((file) => {
    console.log("Appending File:", file); // Debugging: Check each File object
    reqBody.append("images", file);
  });

  const token = sessionStorage.getItem("token");
  const reqHeaders = { Authorization: `Bearer ${token}` };

  console.log("FormData:", reqBody); // Debugging: Check FormData contents

  try {
    let result;
    if (mode === "edit" && productToEdit) {
      result = await edituserPartsApi(productToEdit._id, reqBody, reqHeaders);
    } else {
      result = await addPartsApi(reqBody, reqHeaders);
    }

    if (result.status === 200 || result.status === 201) {
      console.log("success", result.data.message);
      setIsAddProductSidebarOpen(false);
      showToast(`${result.data.message}`, "success");
      displayAllParts();
      if (mode === "add") {
        dispatch(addPart(result.data.carPart));
      }
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error("API Error:", error);
    showToast(error.response?.data?.message || "Something went wrong!", "error");
  }

  setIsLoading(false);
};

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    // Add validation logic here
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Offcanvas show={isAddProductSidebarOpen} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title>{mode === "edit" ? "Edit Part" : "Add Part"}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          {/* Form fields go here */}
          <Form.Group className="mb-3" controlId="formPartName">
            <Form.Label>Part Name</Form.Label>
            <Form.Control
              type="text"
              name="partName"
              value={productDetails.partName}
              onChange={(e) => setProductDetails({ ...productDetails, partName: e.target.value })}
            />
            {errors.partName && <div className="text-danger">{errors.partName}</div>}
          </Form.Group>
          {/* Add other form fields here */}
            {/* *********Category********** */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Category</Form.Label>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {categories.map((category) => (
                  <ToggleCategoryBtn
                    key={category.value}
                    label={category.label}
                    value={category.label}
                    onChange={handleCategoryChange}
                    activeButton={activeButton}
                    setActiveButton={handleCategoryChange}
                    type="category"
                  />
                ))}
              </div>
              {errors.category && (
                <div className="text-danger">{errors.category}</div>
              )}
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
                    activeButton={activeCondition}
                    setActiveButton={handleConditionChange}
                    type="condition"
                  />
                ))}
              </div>
              {errors.condition && (
                <div className="text-danger">{errors.condition}</div>
              )}
            </Form.Group>

            {/* description  */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Description</Form.Label>
              <Form.Control
                as={"textarea"}
                name="description"
                rows={3}
                value={productDetails.description}
                onChange={handleProductDetailsChange}
              ></Form.Control>
              {errors.description && (
                <div className="text-danger">{errors.description}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={productDetails.brand}
                onChange={handleProductDetailsChange}
              />
              {errors.brand && (
                <div className="text-danger">{errors.brand}</div>
              )}
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
              {errors.price && (
                <div className="text-danger">{errors.price}</div>
              )}
            </Form.Group>

            {/* contact */}
            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Contact Number</Form.Label>
              <Form.Control
                type="number"
                name="contactNumber"
                value={productDetails.contactNumber}
                onChange={handleProductDetailsChange}
              ></Form.Control>
              {errors.contactNumber && (
                <div className="text-danger">{errors.contactNumber}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="AddFontSize">Availability</Form.Label>
              <div className="d-flex align-items-center gap-3 mt-2">
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
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
    {imageArray.map((imgURL, index) => (
      imgURL && ( // Only render if imgURL is valid
        <div key={index} style={{ width: "200px", height: "auto", position: "relative" }}>
          <img
            src={imgURL}
            alt={`Preview ${index}`}
            style={{ width: "100%", height: "auto", border: "1px solid #ccc" }}
          />
          <button
            onClick={() => handleRemoveImage(index)}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "red",
              border: "none",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              cursor: "pointer",
              padding: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            x
          </button>
        </div>
      )
    ))}
  </div>
)}




              {errors.images && (
                <div className="text-danger">{errors.images}</div>
              )}
            </Form.Group>
        </Form>
        {/* location */}

        <div style={{ marginTop: "70px" }}>
            <GoogleMapView
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
            {errors.location && (
              <div className="text-danger">{errors.location}</div>
            )}
          </div>

          {/* submit button */}
          <div className="mt-5">
            {" "}
            <SubmitButtons onClick={handleSubmit}>
              {isLoading ? (
                <>
                  <Spinner
                    animation="border"
                    role="status"
                    size="sm"
                    className="me-2"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  Submitting...
                </>
              ) : (
                " Submit "
              )}
            </SubmitButtons>
          </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ProductSidebar;