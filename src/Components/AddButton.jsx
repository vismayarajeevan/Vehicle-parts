import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React, { useState } from "react";
import { Button, Form, InputGroup, Offcanvas } from "react-bootstrap";
import { globalStyles } from "../globalStyles";
import ToggleCategoryBtn from "../reusablecomponents/ToggleCategoryBtn";
import { useDispatch, useSelector } from "react-redux";
import {setActiveButton,setActiveCondition,setAvailability,setCategory, setContactNumber,setDescription,setImage,setPartName,} from "../redux/slices/ProductSlice";

const AddButton = () => {
  const dispatch = useDispatch();
  const {
    activeButton,
    activeCondition,
    availability,
    image,
    partName,
    category,
    description,
    contactNumber,
  } = useSelector((state) => state.productReducer);

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

  // function to take input image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      dispatch(setImage(imgURL));
    }
  };

//   function to change the availabilty radio button
  const handleAvailabilityChange = (e) => {
    dispatch(setAvailability(e.target.value));
  };

  return (
    <>
      <Button onClick={handleAddProducts} className="btn position-fixed bottom-0 end-0 m-4 ps-3 pe-3 shadow-lg" style={{display: "flex",
          alignItems: "center",justifyContent: "center",zIndex: 1, backgroundColor: "#008E8E", borderRadius: "50px", border: "none",}}>
        Add{" "}<i class="fa-solid fa-square-plus ms-2" style={{ color: "#ffffff" }} ></i>
      </Button>

      {/* *************************side bar****************************** */}
      <Offcanvas show={isAddProductSidebarOpen} onHide={() => setIsAddProductSidebarOpen(false)} placement="end" >
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
                    setActiveButton={(value) => dispatch(setActiveButton(value))}
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
                    setActiveButton={(value) => dispatch(setActiveCondition(value))}
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
                <button
                  className="btn d-flex align-items-center justify-content-center"
                  style={globalStyles.AddPageButtonColr}
                >
                  <Icon
                    icon="solar:upload-bold"
                    style={{ fontSize: "24px", color: "#000" }}
                  ></Icon>{" "}
                  Upload
                </button>
              </div>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddButton;
