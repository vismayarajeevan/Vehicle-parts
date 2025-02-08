import React, { useState } from 'react';
import { MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { Card, Dropdown } from 'react-bootstrap';

const MyPostCard = ({ product }) => { // Destructure product from props
  return (
    <Card className="rounded-xl shadow-lg overflow-hidden">
      <Card.Img variant="top" src={product.image} alt={product.title} className="h-64 object-cover" />
      <Card.Body className="p-6">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Card.Title className="text-xl font-semibold text-gray-800">{product.title}</Card.Title>
          <span className="text-lg font-bold text-emerald-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <Card.Text className="text-gray-600">{product.description}</Card.Text>
      </Card.Body>
      <Dropdown className="position-absolute top-3 end-3">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-2 rounded-circle bg-white/80 backdrop-blur hover:bg-white">
          <MoreVertical className="w-5 h-5 text-gray-700" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => console.log('Edit product:', product.id)}
            className="text-gray-700 hover:bg-gray-100"
          >
            <Pencil className="w-4 h-4 me-2" />
            Edit Product
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => console.log('Delete product:', product.id)}
            className="text-red-600 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 me-2" />
            Delete Product
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
};

export default MyPostCard;
