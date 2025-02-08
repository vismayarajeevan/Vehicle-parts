import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";
import { MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { setLocationAccess } from "../redux/slices/ProductSlice";
import { useLocation, Link  } from "react-router-dom";



const Navbarcomp = ({ handleLoginClick }) => {

  const currentPage = useLocation(); // Get current URL path
  const [activeLink, setActiveLink] = useState("home");
  const [location, setLocation] = useState("Fetching location...");


  // Update active link based on URL path
  useEffect(() => {
    if (currentPage.pathname === "/myposts") {
      setActiveLink("posts");
    } else if (currentPage.pathname === "/designs") {
      setActiveLink("designs");
    } else {
      setActiveLink("home");
    }
  }, [currentPage.pathname]); // Runs every time the path changes

const dispatch = useDispatch();
useEffect(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log("OSM Data:", data);

          if (data.address) {
            const city = data.address.city || data.address.town || data.address.village || "Unknown City";
            const state = data.address.state || "Unknown State";
            setLocation(`${city}, ${state}`);
          } else {
            setLocation("Unknown Location");
          }
        } catch (error) {
          console.error("Error fetching OSM data:", error);
          setLocation("Error fetching location");
        }
      },
      (error) => {
        console.error("Geolocation Error:", error);
        setLocation("Location access denied or unavailable.");
      }
    );
  } else {
    setLocation("Geolocation is not supported by this browser.");
  }
}, []);


 
  return (
    <>
      <Navbar expand="lg" className="bg-body-light py-2">
        <Container>
          {/* Logo and Search Bar in Same Row for Large Screens */}
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center gap-3">
                <img src={logo} className="img-fluid" width="50px" alt="Logo" />
                {/* Search Bar for Large Screens */}
                <Form className="d-none d-lg-block">
                  <Form.Control
                    type="search"
                    placeholder="Search here..."
                    style={{
                      width: "250px",
                      border: "none",
                      background: "#F0F0F0",
                      height: "35px",
                    }}
                    aria-label="Search"
                  />
                </Form>
              </div>
              {/* Location Below Logo */}
              <div className="d-flex align-items-center gap-1 mt-1">
                <MapPin size={16} className="text-danger" />
                <span className="text-secondary" style={{ fontSize: "13px" }}>
                  {location}
                </span>
              </div>
            </div>
            {/* Navbar Toggle */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="w-100 mt-2">
            {/* Search Bar for Small Screens */}
            <Form className="w-100 d-lg-none mb-2">
              <Form.Control
                type="search"
                placeholder="Search here..."
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  border: "none",
                  background: "#F0F0F0",
                  height: "35px",
                }}
                aria-label="Search"
              />
            </Form>

            {/* Navigation Links */}
            <Nav className="me-auto gap-lg-4 gap-2">
              


<Nav.Link as={Link} to="/" className={activeLink === "home" ? "active" : "text-secondary"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/myposts" className={activeLink === "posts" ? "active" : "text-secondary"}>
              My Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/designs" className={activeLink === "designs" ? "active" : "text-secondary"}>
              Designs
            </Nav.Link>
            

              <Nav.Link
                href="#profile"
                className={`d-inline d-lg-none ${activeLink === "profile" ? "active" : "text-secondary"}`}
                onClick={() => setActiveLink("profile")}
              >
                Profile
              </Nav.Link>
            </Nav>

            <div>
              {/* Show image on large screens */}
              <button onClick={handleLoginClick} className="btn d-none d-lg-inline">
                <img src={user} className="img-fluid" width="40px" alt="" />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomp;