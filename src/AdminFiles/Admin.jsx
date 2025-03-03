




// import React, { useContext, useState } from 'react';
// import { Container, Navbar, Nav, Table, Button, Form, Card, Image } from 'react-bootstrap';
// import { Trash2, Check, Users, Upload, X } from 'lucide-react';
// import { AuthContext } from '../context/AuthProvider';
// import { showToast } from '../reusablecomponents/Toast';
// import { useNavigate } from 'react-router-dom';
// import { addBannerAdminApi } from '../services/allAPI';

// const Admin = () => {

//   const {handleLogout: contextHandleLogout} = useContext(AuthContext);
  
//   const navigate = useNavigate();

//   const [banners, setBanners] = useState([]);
//   const [newBanner, setNewBanner] = useState({images: null});


//   const handleFileChange = (e) => {
//     if (e.target.files[0]) {
//       setNewBanner({ ...newBanner, images: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) });
//     }
//   };

//   const [activeTab, setActiveTab] = useState('banners');


//   const handleBannerSubmit = async (e) => {
//     e.preventDefault();
//     if (!newBanner.images) return alert("image are required");

//     const formData = new FormData();
//     formData.append("images", newBanner.images);

//     try {
//       const result =await addBannerAdminApi(formData);
//       console.log(result);
      
//       setNewBanner({ images: null});
     
//     } catch (error) {
//       console.error("Error adding banner:", error);
//     }
//   };


  
//     const handleLogout = () => {
//       contextHandleLogout(); // Use the logout function from AuthContext
//       showToast("Logged out successfully", "success");
//       navigate("/");
//     };

//   return (
//     <div className="bg-light min-vh-100">
//       <Navbar bg="primary" variant="dark" className="shadow">
//         <Container>
//           <Navbar.Brand>Admin Dashboard</Navbar.Brand>
//           <Nav>
//             <Nav.Link onClick={() => setActiveTab('banners')} active={activeTab === 'banners'}>
//               Banners
//             </Nav.Link>
//             <Nav.Link onClick={() => setActiveTab('users')} active={activeTab === 'users'}>
//               Users
//             </Nav.Link>
//             <Nav.Link onClick={handleLogout} active={activeTab === 'users'}>
//               Logout
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Container className="py-4">
//         {activeTab === 'banners' ? (
//           <>
//             <Card className="mb-4">
//               <Card.Body>
//                 <Card.Title>Add New Banner</Card.Title>
//                 <Form >
//                   <div className="d-flex">
//                     <div className="w-50 d-flex flex-column align-items-center justify-content-center border p-3">
//                       <Form.Label htmlFor="banner-upload" className="btn btn-primary d-flex align-items-center">
//                         <Upload className="me-2" /> Upload Banner
//                       </Form.Label>
//                       <Form.Control id="banner-upload" type="file" accept="image/*" onChange={handleFileChange} hidden />
//                     </div>
//                     <div className="w-50 d-flex flex-column align-items-center border p-3">
//                       {newBanner.imageUrl && (
//                         <div className="position-relative">
//                           <Image src={newBanner.imageUrl} thumbnail className="mt-2" />
//                           <Button variant="danger" size="sm" className="position-absolute top-0 end-0" >
//                             <X />
//                           </Button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <Button onClick={handleBannerSubmit} type="submit" className="mt-3 w-100" disabled={!newBanner.imageUrl}>
//                     Submit Banner
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>

//             <Card>
//               <Card.Body>
//                 <Card.Title>Banner Management</Card.Title>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>Banner</th>
//                       <th>Title</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {banners.map((banner) => (
//                       <tr key={banner.id}>
//                         <td>
//                           <Image src={banner.imageUrl} thumbnail width={100} />
//                         </td>
//                         <td>{banner.title}</td>
//                         <td>{banner.approved ? 'Approved' : 'Pending'}</td>
//                         <td>
//                           {!banner.approved && (
//                             <Button variant="success" size="sm" >
//                               <Check />
//                             </Button>
//                           )}
//                           <Button variant="danger" size="sm"  className="ms-2">
//                             <Trash2 />
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </Card.Body>
//             </Card>
//           </>
//         ) : (
//           <Card>
//             <Card.Body>
//               <Card.Title>User Management</Card.Title>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Role</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.id}>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.role}</td>
//                       <td>{user.status === 'active' ? 'Active' : 'Inactive'}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         )}
//       </Container>

//       <footer className="bg-primary text-white text-center py-3">
//         &copy; 2025 Admin Dashboard. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Admin;



// import React, { useContext, useState } from 'react';
// import { Container, Navbar, Nav, Table, Button, Form, Card, Image } from 'react-bootstrap';
// import { Trash2, Check, Users, Upload, X } from 'lucide-react';
// import { AuthContext } from '../context/AuthProvider';
// import { showToast } from '../reusablecomponents/Toast';
// import { useNavigate } from 'react-router-dom';
// import { addBannerAdminApi } from '../services/allAPI';

// const Admin = () => {
//   const { handleLogout: contextHandleLogout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [banners, setBanners] = useState([]);
//   const [newBanner, setNewBanner] = useState({ image: null });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e) => {
//     if (e.target.files[0]) {
//       setNewBanner({ image: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) });
//     }
//   };

//   const handleRemoveImage = () => {
//     setNewBanner({ image: null, imageUrl: null });
//   };

//   const handleBannerSubmit = async (e) => {
//     e.preventDefault();
//     if (!newBanner.image) {
//       showToast("Please select an image", "warning");
//       return;
//     }

//     setIsLoading(true);

//     const formData = new FormData();
//     formData.append("images", newBanner.image);

//     try {
//       const token = sessionStorage.getItem("token");
//       const reqHeaders = {
//         Authorization: `Bearer ${token}`,
//       };

//       const result = await addBannerAdminApi(formData, reqHeaders);
//       console.log(result);

//       if (result.status === 201) {
//         showToast("Banner added successfully", "success");
//         setNewBanner({ image: null, imageUrl: null });
//         // Optionally, you can fetch the updated list of banners here
//       } else {
//         showToast(result.response.data.message || "Failed to add banner", "error");
//       }
//     } catch (error) {
//       console.error("Error adding banner:", error);
//       showToast(error.response?.data?.message || "Something went wrong!", "error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     contextHandleLogout();
//     showToast("Logged out successfully", "success");
//     navigate("/");
//   };

//   const [activeTab, setActiveTab] = useState('banners');

//   return (
//     <div className="bg-light min-vh-100">
//       <Navbar bg="primary" variant="dark" className="shadow">
//         <Container>
//           <Navbar.Brand>Admin Dashboard</Navbar.Brand>
//           <Nav>
//             <Nav.Link onClick={() => setActiveTab('banners')} active={activeTab === 'banners'}>
//               Banners
//             </Nav.Link>
//             <Nav.Link onClick={() => setActiveTab('users')} active={activeTab === 'users'}>
//               Users
//             </Nav.Link>
//             <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Container className="py-4">
//         {activeTab === 'banners' ? (
//           <>
//             <Card className="mb-4">
//               <Card.Body>
//                 <Card.Title>Add New Banner</Card.Title>
//                 <Form>
//                   <div className="d-flex">
//                     <div className="w-50 d-flex flex-column align-items-center justify-content-center border p-3">
//                       <Form.Label htmlFor="banner-upload" className="btn btn-primary d-flex align-items-center">
//                         <Upload className="me-2" /> Upload Banner
//                       </Form.Label>
//                       <Form.Control
//                         id="banner-upload"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         hidden
//                       />
//                     </div>
//                     <div className="w-50 d-flex flex-column align-items-center border p-3">
//                       {newBanner.imageUrl && (
//                         <div className="position-relative">
//                           <Image src={newBanner.imageUrl} thumbnail className="mt-2" />
//                           <Button
//                             variant="danger"
//                             size="sm"
//                             className="position-absolute top-0 end-0"
//                             onClick={handleRemoveImage}
//                           >
//                             <X />
//                           </Button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <Button
//                     onClick={handleBannerSubmit}
//                     className="mt-3 w-100"
//                     disabled={!newBanner.imageUrl || isLoading}
//                   >
//                     {isLoading ? (
//                       <>
//                         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                         Submitting...
//                       </>
//                     ) : (
//                       "Submit Banner"
//                     )}
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>

//             <Card>
//               <Card.Body>
//                 <Card.Title>Banner Management</Card.Title>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>Banner</th>
//                       <th>Title</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {banners.map((banner) => (
//                       <tr key={banner.id}>
//                         <td>
//                           <Image src={banner.imageUrl} thumbnail width={100} />
//                         </td>
//                         <td>{banner.title}</td>
//                         <td>{banner.approved ? 'Approved' : 'Pending'}</td>
//                         <td>
//                           {!banner.approved && (
//                             <Button variant="success" size="sm">
//                               <Check />
//                             </Button>
//                           )}
//                           <Button variant="danger" size="sm" className="ms-2">
//                             <Trash2 />
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </Card.Body>
//             </Card>
//           </>
//         ) : (
//           <Card>
//             <Card.Body>
//               <Card.Title>User Management</Card.Title>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Role</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user) => (
//                     <tr key={user.id}>
//                       <td>{user.name}</td>
//                       <td>{user.email}</td>
//                       <td>{user.role}</td>
//                       <td>{user.status === 'active' ? 'Active' : 'Inactive'}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         )}
//       </Container>

//       <footer className="bg-primary text-white text-center py-3">
//         &copy; 2025 Admin Dashboard. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Admin;




import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav, Table, Button, Form, Card, Image } from 'react-bootstrap';
import { Trash2, Check, Users, Upload, X } from 'lucide-react';
import { AuthContext } from '../context/AuthProvider';
import { showToast } from '../reusablecomponents/Toast';
import { useNavigate } from 'react-router-dom';
import { addBannerAdminApi, displayBannerApi } from '../services/allAPI';

const Admin = () => {
  const { handleLogout: contextHandleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [banners, setBanners] = useState([]);
  const [newBanner, setNewBanner] = useState({ image: null });
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all banners on component mount
  useEffect(() => {
    fetchBanners();
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

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setNewBanner({ image: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleRemoveImage = () => {
    setNewBanner({ image: null, imageUrl: null });
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

  const handleLogout = () => {
    contextHandleLogout();
    showToast("Logged out successfully", "success");
    navigate("/");
  };

  const [activeTab, setActiveTab] = useState('banners');

  return (
    <div className="bg-light min-vh-100">
      <Navbar bg="primary" variant="dark" className="shadow">
        <Container>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => setActiveTab('banners')} active={activeTab === 'banners'}>
              Banners
            </Nav.Link>
            <Nav.Link onClick={() => setActiveTab('users')} active={activeTab === 'users'}>
              Users
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-4">
        {activeTab === 'banners' ? (
          <>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Add New Banner</Card.Title>
                <Form>
                  <div className="d-flex">
                    <div className="w-50 d-flex flex-column align-items-center justify-content-center border p-3">
                      <Form.Label htmlFor="banner-upload" className="btn btn-primary d-flex align-items-center">
                        <Upload className="me-2" /> Upload Banner
                      </Form.Label>
                      <Form.Control
                        id="banner-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        hidden
                      />
                    </div>
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
                    onClick={handleBannerSubmit}
                    className="mt-3 w-100"
                    disabled={!newBanner.imageUrl || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Banner"
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Banner Management</Card.Title>
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
                          
                          <Button variant="danger" size="sm" className="ms-2">
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
          <Card>
            <Card.Body>
              <Card.Title>User Management</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.status === 'active' ? 'Active' : 'Inactive'}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}
      </Container>

      <footer className="bg-primary text-white text-center py-3">
        &copy; 2025 Admin Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Admin;