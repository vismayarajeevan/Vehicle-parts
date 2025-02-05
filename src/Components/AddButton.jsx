import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React, { useState } from "react";
import { Button, Form, InputGroup, Offcanvas, Spinner } from "react-bootstrap";
import { globalStyles } from "../globalStyles";
import ToggleCategoryBtn from "../reusablecomponents/ToggleCategoryBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveButton,
  setActiveCondition,
  resetActiveButton,
  resetActiveCondition,
} from "../redux/slices/ProductSlice";

import GoogleMapView from "./GoogleMapView";
import SubmitButtons from "../reusablecomponents/SubmitButtons";
import { addPartsApi } from "../services/allAPI";
import { showToast } from "../reusablecomponents/Toast";

const AddButton = () => {
  // call the action using dispatch
  const dispatch = useDispatch();
  // access the state
  const { activeButton, activeCondition} = useSelector((state) => state.productReducer);
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

  const [errors, setErrors] = useState({
    partName: "",
    category: "",
    condition: "",
    brand: "",
    price: "",
    stockAvailability: "",
    description: "",
    contactNumber: "",
    latitude: "",
    longitude: "",
    images: "",
  });

  // state for spinner
  const [isLoading, setIsLoading] = useState(false);

  // state for sidebar open and close
  const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);

  // state to update location
  const [selectedLocation, setSelectedLocation] = useState(null);

  // array to store images
  const [imageArray, setImageArray] = useState([]);

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

  // function to show sidebar
  const handleAddProducts = () => {
    setIsAddProductSidebarOpen(!isAddProductSidebarOpen);
  };

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

  // take value from input
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

  const handleCategoryChange = (value) => {
    dispatch(setActiveButton(value));
    setProductDetails((prev) => ({ ...prev, category: value }));
  };

  const handleConditionChange = (value) => {
    dispatch(setActiveCondition(value));
    setProductDetails((prev) => ({ ...prev, condition: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const {
      partName,
      category,
      condition,
      brand,
      price,
      description,
      contactNumber,
      latitude,
      longitude,
      images,
    } = productDetails;

    // Validate part name (letters only)
    const partNameRegex = /^[A-Za-z\s]+$/;
    if (!partName) newErrors.partName = "Part Name is required";
    else if (!partNameRegex.test(partName))
      newErrors.partName = "Part Name must contain only letters";

    // Validate category
    if (!category) newErrors.category = "Category is required";

    // Validate condition
    if (!condition) newErrors.condition = "Condition is required";

    // Validate brand
    if (!brand) newErrors.brand = "Brand is required";

    // Validate price
    if (!price) newErrors.price = "Price is required";

    // Validate description
    if (!description) newErrors.description = "Description is required";

    // Validate contact number (exactly 10 digits)
    const contactNumberRegex = /^[0-9]{10}$/;
    if (!contactNumber) newErrors.contactNumber = "Contact Number is required";
    else if (!contactNumberRegex.test(contactNumber))
      newErrors.contactNumber =
        "Contact Number must consist of exactly 10 digits";

    // Validate location
    if (!latitude || !longitude) newErrors.location = "Location is required";

    // Validate images
    if (images.length === 0)
      newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);

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
      longitude,
    } = productDetails;

    if (
      partName &&
      category &&
      condition &&
      brand &&
      price &&
      stockAvailability &&
      description &&
      contactNumber &&
      latitude &&
      longitude
    ) {
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
        Authorization: `Bearer ${token}`,
      };

      try {
        const result = await addPartsApi(reqBody, reqHeaders); // 🔹 Ensure headers are passed
        console.log("Server Response:", result);

        if (result.status === 201) {
          console.log("data:", result.data.carPart);

          showToast(`${result.data.message}`, "success");
          setIsAddProductSidebarOpen(false);

          // Reset category and condition
          dispatch(resetActiveButton()); // Reset active category button
          dispatch(resetActiveCondition()); // Reset active condition button
          // Clear all input fields after successful submission
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

          // Clear the image array
          setImageArray([]);
          setSelectedLocation(null);
        } else {
          showToast(`${result.data.message}`, "error");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Something went wrong!";

        showToast(errorMessage, "error");
      }
      setIsLoading(false);
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
                />
              </InputGroup>
              {errors.partName && (
                <div className="text-danger">{errors.partName}</div>
              )}
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
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginTop: "20px",
                  }}
                >
                  {imageArray.map((imgURL, index) => (
                    <div
                      key={index}
                      style={{
                        width: "200px",
                        height: "auto",
                        position: "relative",
                      }}
                    >
                      <img
                        // src={imgURL}
                        src={URL.createObjectURL(imgURL)}
                        alt={`Preview ${index}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          border: "1px solid #ccc",
                        }}
                      />
                      {/* Close button */}
                      <button
                        onClick={(event) => handleRemoveImage(index, event)}
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
    </>
  );
};

export default AddButton;
