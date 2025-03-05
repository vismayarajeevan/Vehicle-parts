
import React, { useContext, useState, useEffect,useRef  } from 'react';
import { Container, Navbar, Nav, Table, Button, Form, Card, Image, Stack } from 'react-bootstrap';
// import { LogOut, Image, Users } from 'lucide-react';
import { Trash2,LogOut, Check, Users, Upload, X } from 'lucide-react';
import { FaImage } from "react-icons/fa"; // Import the image icon
import { AuthContext } from '../context/AuthProvider';
import { showToast } from '../reusablecomponents/Toast';
import { useNavigate } from 'react-router-dom';
import { addBannerAdminApi, deleteAdminBannerApi, displayBannerApi, displayuserListApi } from '../services/allAPI';

const Admin = () => {
  const { handleLogout: contextHandleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [banners, setBanners] = useState([]);
  const [users, setUsers] = useState([]); // State for users
  const [newBanner, setNewBanner] = useState({ image: null });
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all banners on component mount
  useEffect(() => {
    fetchBanners();
    fetchUsers();
  }, []);

  const fetchBanners = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = {
        Authorization: `Bearer ${token}`,
      };

      const result = await displayBannerApi(reqHeaders);
      console.log("bannerlist",result);
      
      if (result.status === 200) {
        setBanners(result.data.banners);
      } else {
        showToast("Failed to fetch banners", "error");
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
      showToast("Something went wrong while fetching banners", "error");
    }
  };


  const fetchUsers = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = {
        Authorization: `Bearer ${token}`,
      };

      const result = await displayuserListApi(reqHeaders);
      console.log("userlist", result);

      if (result.status === 200) {
        setUsers(result.data); // Assuming the API returns an array of users
      } else {
        showToast("Failed to fetch users", "error");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      showToast("Something went wrong while fetching users", "error");
    }
  };


  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setNewBanner({ image: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) });
    }
  };

  

  const handleRemoveImage = () => {
    setNewBanner({ image: null, imageUrl: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    if (!newBanner.image) {
      showToast("Please select an image", "warning");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("images", newBanner.image);

    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = {
        Authorization: `Bearer ${token}`,
      };

      const result = await addBannerAdminApi(formData, reqHeaders);
      console.log(result);

      if (result.status === 201) {
        showToast("Banner added successfully", "success");
        setNewBanner({ image: null, imageUrl: null });
        fetchBanners(); // Refresh the banner list after adding a new banner
      } else {
        showToast(result.response.data.message || "Failed to add banner", "error");
      }
    } catch (error) {
      console.error("Error adding banner:", error);
      showToast(error.response?.data?.message || "Something went wrong!", "error");
    } finally {
      setIsLoading(false);
    }
  };


  const handleDeleteBanner = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = {
        Authorization: `Bearer ${token}`,
      };

      const result = await deleteAdminBannerApi(id, reqHeaders);
      console.log(result);

      if (result.status === 200) {
        showToast("Banner deleted successfully", "success");
        fetchBanners(); // Refresh the banner list after deletion
      } else {
        showToast(result.response.data.message || "Failed to delete banner", "error");
      }
    } catch (error) {
      console.error("Error deleting banner:", error);
      showToast("Something went wrong while deleting the banner", "error");
    }
  };


  const handleLogout = () => {
    contextHandleLogout();
    showToast("Logged out successfully", "success");
    navigate("/");
  };

  const [activeTab, setActiveTab] = useState('banners');

  return (
    <div className="bg-light min-vh-100">
      

<Navbar bg="white" expand="md" className="shadow-md">
  <Container>
    <Navbar.Brand className="fw-bold text-dark">Banner Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* Banners Tab */}
        <Nav.Link
          className={`px-4 py-2 d-flex align-items-center rounded ${
            activeTab === "banners" ? "active-tab" : "inactive-tab"
          }`}
          onClick={() => setActiveTab("banners")}
        >
          <FaImage size={18} className="me-2" /> Banners
        </Nav.Link>

        {/* Users Tab */}
        <Nav.Link
          className={`px-4 py-2 d-flex align-items-center rounded ${
            activeTab === "users" ? "active-tab" : "inactive-tab"
          }`}
          onClick={() => setActiveTab("users")}
        >
          <Users size={18} className="me-2" /> Users
        </Nav.Link>
      </Nav>
      <Button variant="outline-danger" onClick={handleLogout} className="d-flex align-items-center">
        <LogOut size={18} className="me-2" /> <span className="d-none d-md-inline">Logout</span>
      </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>




<Container className="py-4 d-flex flex-column align-items-center">
  {activeTab === "banners" ? (
    <>
      {/* Add New Banner Card */}
      <Card className="bg-white rounded-lg shadow-md p-4 mb-4 w-100" style={{ maxWidth: "900px" }}>
        <div className="d-flex align-items-center mb-4">
          <FaImage size={24} className="me-2 text-primary" />
          <h4 className="fs-4 fw-semibold">Add New Banner</h4>
        </div>
        <Card.Body>
          <Form>
            <div className="d-flex">
              {/* Upload Section */}
              <div className="w-50 d-flex flex-column align-items-center justify-content-center border p-3">
                <Form.Label
                  htmlFor="banner-upload"
                  style={{ backgroundColor: "#008E8E", color: "white" }}
                  className="btn d-flex align-items-center"
                >
                  <Upload className="me-2" /> Upload Banner
                </Form.Label>
                <Form.Control
                  id="banner-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  hidden
                />
              </div>
              {/* Image Preview Section */}
              <div className="w-50 d-flex flex-column align-items-center border p-3">
                {newBanner.imageUrl && (
                  <div className="position-relative">
                    <Image src={newBanner.imageUrl} thumbnail className="mt-2" />
                    <Button
                      variant="danger"
                      size="sm"
                      className="position-absolute top-0 end-0"
                      onClick={handleRemoveImage}
                    >
                      <X />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <Button
              style={{ backgroundColor: "#008E8E", border: "none" }}
              onClick={handleBannerSubmit}
              className="mt-3 w-100"
              disabled={!newBanner.imageUrl || isLoading}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                "Submit Banner"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Banner Management Card */}
      <Card className="w-100" style={{ maxWidth: "900px" }}>
        <Card.Body>
          <Card.Title className='pb-2'>Banner Management</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Banner</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner._id}>
                  <td>
                    <Image src={banner.images} thumbnail width={100} />
                  </td>
                  <td>
                    <Button onClick={() => handleDeleteBanner(banner._id)} variant="danger" size="sm" className="ms-2">
                      <Trash2 />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  ) : (
    <Card className="w-100" style={{ maxWidth: "900px" }}>
      <Card.Body>
        <Card.Title>User Management</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber === "undefined" ? "Google Authentication" : user.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )}
</Container>


      
    </div>
  );
};

export default Admin;