


// import React, { useState, useEffect, useContext } from "react";
// import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
// import user from "../assets/user.svg";
// import logo from "../assets/logo.png";
// import { MapPin } from "lucide-react";
// import { useLocation, Link, useNavigate } from "react-router-dom";
// import { showToast } from "../reusablecomponents/Toast";
// import { AuthContext } from "../context/AuthProvider";

// const Navbarcomp = () => {

//     const {handleLoginClick} = useContext(AuthContext)
  
//   const currentPage = useLocation();
//   const navigate = useNavigate();
//   const [activeLink, setActiveLink] = useState("home");
//   const [location, setLocation] = useState("Fetching location...");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = sessionStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("token");
//     setIsLoggedIn(false);
//     showToast("Logged out successfully", "success");
//     navigate("/");
//   };

//   const handleMyPostsClick = () => {
//     if (isLoggedIn) {
//       navigate("/myposts");
//     } else {
//       showToast("Please log in to view your posts!", "warning");
//       handleLoginClick();
//     }
//   };

//   useEffect(() => {
//     if (currentPage.pathname === "/myposts") {
//       setActiveLink("posts");
//     } else if (currentPage.pathname === "/designs") {
//       setActiveLink("designs");
//     } else {
//       setActiveLink("home");
//     }
//   }, [currentPage.pathname]);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

//           try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (data.address) {
//               const city = data.address.city || data.address.town || data.address.village || "Unknown City";
//               const state = data.address.state || "Unknown State";
//               setLocation(`${city}, ${state}`);
//             } else {
//               setLocation("Unknown Location");
//             }
//           } catch (error) {
//             setLocation("Error fetching location");
//           }
//         },
//         () => setLocation("Location access denied or unavailable.")
//       );
//     } else {
//       setLocation("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   return (
//     <Navbar expand="lg" className="bg-body-light py-2">
//       <Container>
//         <div className="d-flex align-items-center justify-content-between w-100">
//           <div className="d-flex flex-column">
//             <div className="d-flex align-items-center gap-3">
//               <img src={logo} className="img-fluid" width="50px" alt="Logo" />
//               <div className="d-flex align-items-center gap-1 mt-1">
//                 <MapPin size={16} className="text-danger" />
//                 <span className="text-secondary" style={{ fontSize: "13px" }}>{location}</span>
//               </div>
//             </div>
//           </div>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         </div>

//         <Navbar.Collapse id="basic-navbar-nav" className="w-100 mt-2">
//           <Nav className="me-auto gap-lg-4 gap-3">
//             <Nav.Link as={Link} to="/" className={activeLink === "home" ? "active" : "text-secondary"}>Home</Nav.Link>
//             <Nav.Link onClick={handleMyPostsClick} className={activeLink === "posts" ? "active" : "text-secondary"}>My Posts</Nav.Link>
//             <Nav.Link as={Link} to="/designs" className={activeLink === "designs" ? "active" : "text-secondary"}>Designs</Nav.Link>
//             <hr className="d-lg-none" />
//           </Nav>

//           {/* Small Screen (Show login button only if not logged in) */}
//           <div className="d-flex align-items-center d-lg-none">
//             {isLoggedIn ? (
//               <Dropdown>
//                 <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
//                   <img src={user} className="img-fluid" onClick={() => navigate("/profile")} width="40px" alt="User" />
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             ) : (
//               <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
//             )}
//           </div>

//           {/* Large Screen (Show profile image always, but dropdown only if logged in) */}
//           <div className="d-none d-lg-block">
//             {isLoggedIn ? (
//               <Dropdown>
//                 <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
//                   <img src={user} className="img-fluid" onClick={() => navigate("/profile")} width="40px" alt="User" />
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             ) : (
//               <img
//                 src={user}
//                 className="img-fluid"
//                 onClick={handleLoginClick}
//                 width="40px"
//                 alt="User"
//                 style={{ cursor: "pointer" }}
//               />
//             )}
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbarcomp;



import React, { useState, useEffect, useContext } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";
import { MapPin } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { showToast } from "../reusablecomponents/Toast";
import { AuthContext } from "../context/AuthProvider";

const Navbarcomp = () => {
  const {
    isLoggedIn,
    handleLoginClick,
    handleLogout: contextHandleLogout,
  } = useContext(AuthContext);

  const currentPage = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("home");
  const [location, setLocation] = useState("Fetching location...");

  const handleLogout = () => {
    contextHandleLogout(); // Use the logout function from AuthContext
    showToast("Logged out successfully", "success");
    navigate("/");
  };

  const handleMyPostsClick = () => {
    if (isLoggedIn) {
      navigate("/myposts");
    } else {
      showToast("Please log in to view your posts!", "warning");
      handleLoginClick();
    }
  };

  useEffect(() => {
    if (currentPage.pathname === "/myposts") {
      setActiveLink("posts");
    } else if (currentPage.pathname === "/designs") {
      setActiveLink("designs");
    } else {
      setActiveLink("home");
    }
  }, [currentPage.pathname]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

          try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.address) {
              const city = data.address.city || data.address.town || data.address.village || "Unknown City";
              const state = data.address.state || "Unknown State";
              setLocation(`${city}, ${state}`);
            } else {
              setLocation("Unknown Location");
            }
          } catch (error) {
            setLocation("Error fetching location");
          }
        },
        () => setLocation("Location access denied or unavailable.")
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-light py-2">
      <Container>
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-3">
              <img src={logo} className="img-fluid" width="50px" alt="Logo" />
              <div className="d-flex align-items-center gap-1 mt-1">
                <MapPin size={16} className="text-danger" />
                <span className="text-secondary" style={{ fontSize: "13px" }}>{location}</span>
              </div>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="w-100 mt-2">
          <Nav className="me-auto gap-lg-4 gap-3">
            <Nav.Link as={Link} to="/" className={activeLink === "home" ? "active" : "text-secondary"}>Home</Nav.Link>
            <Nav.Link onClick={handleMyPostsClick} className={activeLink === "posts" ? "active" : "text-secondary"}>My Posts</Nav.Link>
            <Nav.Link as={Link} to="/designs" className={activeLink === "designs" ? "active" : "text-secondary"}>Designs</Nav.Link>
            <hr className="d-lg-none" />
          </Nav>

          {/* Small Screen (Show login button only if not logged in) */}
          <div className="d-flex align-items-center d-lg-none">
            {isLoggedIn ? (
              <Dropdown>
                <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
                  <img src={user} className="img-fluid" onClick={() => navigate("/profile")} width="40px" alt="User" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
            )}
          </div>

          {/* Large Screen (Show profile image always, but dropdown only if logged in) */}
          <div className="d-none d-lg-block">
            {isLoggedIn ? (
              <Dropdown>
                <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
                  <img src={user} className="img-fluid" onClick={() => navigate("/profile")} width="40px" alt="User" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <img
                src={user}
                className="img-fluid"
                onClick={handleLoginClick}
                width="40px"
                alt="User"
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomp;