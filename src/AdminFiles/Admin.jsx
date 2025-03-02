




import React, { useState } from 'react';
import { Container, Navbar, Nav, Table, Button, Form, Card, Image } from 'react-bootstrap';
import { Trash2, Check, Users, Upload, X } from 'lucide-react';

const Admin = () => {
  const [banners, setBanners] = useState([
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809', title: 'Summer Sale', approved: true },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85', title: 'New Collection', approved: true },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d', title: 'Holiday Special', approved: false },
  ]);

  const [users] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', joinDate: '2023-01-15', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', joinDate: '2023-02-20', status: 'active' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'User', joinDate: '2023-03-10', status: 'inactive' },
    { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', role: 'User', joinDate: '2023-04-05', status: 'active' },
  ]);

  const [newBanner, setNewBanner] = useState({
    title: '',
    imageUrl: '',
  });

  const [activeTab, setActiveTab] = useState('banners');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setNewBanner({ ...newBanner, imageUrl });
    }
  };

  const handleRemoveImage = () => {
    setNewBanner({ ...newBanner, imageUrl: '' });
  };

  const handleBannerSubmit = (e) => {
    e.preventDefault();
    if (newBanner.title && newBanner.imageUrl) {
      const newBannerId = (banners.length + 1).toString();
      setBanners([...banners, { id: newBannerId, imageUrl: newBanner.imageUrl, title: newBanner.title, approved: false }]);
      setNewBanner({ title: '', imageUrl: '' });
    }
  };

  const handleApprove = (id) => {
    setBanners(banners.map((banner) => (banner.id === id ? { ...banner, approved: true } : banner)));
  };

  const handleDelete = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

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
          </Nav>
        </Container>
      </Navbar>

      <Container className="py-4">
        {activeTab === 'banners' ? (
          <>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Add New Banner</Card.Title>
                <Form onSubmit={handleBannerSubmit}>
                  <div className="d-flex">
                    <div className="w-50 d-flex flex-column align-items-center justify-content-center border p-3">
                      <Form.Label htmlFor="banner-upload" className="btn btn-primary d-flex align-items-center">
                        <Upload className="me-2" /> Upload Banner
                      </Form.Label>
                      <Form.Control id="banner-upload" type="file" accept="image/*" onChange={handleFileChange} hidden />
                    </div>
                    <div className="w-50 d-flex flex-column align-items-center border p-3">
                      {newBanner.imageUrl && (
                        <div className="position-relative">
                          <Image src={newBanner.imageUrl} thumbnail className="mt-2" />
                          <Button variant="danger" size="sm" className="position-absolute top-0 end-0" onClick={handleRemoveImage}>
                            <X />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button type="submit" className="mt-3 w-100" disabled={!newBanner.title || !newBanner.imageUrl}>
                    Submit Banner
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
                      <th>Title</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners.map((banner) => (
                      <tr key={banner.id}>
                        <td>
                          <Image src={banner.imageUrl} thumbnail width={100} />
                        </td>
                        <td>{banner.title}</td>
                        <td>{banner.approved ? 'Approved' : 'Pending'}</td>
                        <td>
                          {!banner.approved && (
                            <Button variant="success" size="sm" onClick={() => handleApprove(banner.id)}>
                              <Check />
                            </Button>
                          )}
                          <Button variant="danger" size="sm" onClick={() => handleDelete(banner.id)} className="ms-2">
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
