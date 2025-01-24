import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import choice_img from '../assets/choices.png'
import { Link } from 'react-router-dom'
import ChoicesView from '../Pages/ChoicesView';
import { ChevronRight } from 'lucide-react';
import ChoicesItems from './ChoicesItems';


const parts = [
  {
    id: 1,
    name: "Engine Oil Filter",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Spark Plugs Set",
    price: 45.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Air Filter",
    price: 19.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Brake Pads",
    price: 89.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Brake Discs",
    price: 125.99,
    rating: 4.6,
    image: "https://s3-alpha-sig.figma.com/img/ee9b/a0a6/df8bddb3c41587ff89985f525c90fa1a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKsS1EwIbcBljgvALAhQV-lGbx1H4MOfmnvw5PtYJuayx6X6wGzkq2sNFByLdWcVC1kjkil6VPpLhKgMDn94cASgSnkPBYKL2tF5oAg5-CgXLeh-GbQLzSOc-poeiW--2VTKRb9ZyKXJ5gOKGNlcCuo7~ZjhdYf3ty1~~1Jeo6LUILQ~-EZZLhiTvDkhMJExK0NdWARGnetJa~Sr6XLTmlAz80r8bDXHtaFPHpj3B7R-u7~DaemcU2Q~m6k71Ze-ju~yuxlE-9L7QfDe27dQFRXM~i5uii7n8VOckvUnVwRmdAx19Zu~uvZeiCEdry17ax6dRWbUkpejPPav8R5NVA__"
  },
  {
    id: 6,
    name: "Brake Fluid",
    price: 15.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "Shock Absorbers",
    price: 199.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1635784063754-0f5773345d76?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Coil Springs",
    price: 149.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Control Arms",
    price: 179.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1635784063754-0f5773345d76?auto=format&fit=crop&q=80&w=800"
  }
];


const Choices = () => {
  return (

    <div className="container py-4">
      <div  className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 font-weight-bold text-dark">Your Choices</h2>
          <Link 
            to="/choices" 
            className="d-flex align-items-center text-primary hover:text-blue-700"
          >
            See All
            <ChevronRight className="ms-2" />
          </Link>
        </div>
       
      </div>
      <Row className="g-4">
            {parts.map(part => (
              <Col key={part.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <ChoicesItems part={part} />
              </Col>
            ))}
          </Row>
   
  </div>
  
  )
}

export default Choices