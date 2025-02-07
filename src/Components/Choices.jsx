import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import choice_img from '../assets/choices.png'
import { Link } from 'react-router-dom'
import ChoicesView from '../Pages/ChoicesView';
import { ChevronRight } from 'lucide-react';
import ChoicesItems from './ChoicesItems';
import { useDispatch, useSelector } from 'react-redux';
import { displayAllPartsApi } from '../services/allAPI';
import { setParts } from '../redux/slices/ProductSlice';




const Choices = ({displayData}) => {
  

  return (

    <div className="container py-4">
      <div  className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 font-weight-bold text-dark">Your Choices</h2>
          <Link 
            to="/choices" 
            // state={{ parts }} 
            // state={{ displayData }} 
            state={{ parts: displayData }} // Pass displayData as 'parts'
            className="d-flex align-items-center text-primary hover:text-blue-700"
          >
            See All
            <ChevronRight className="ms-2" />
          </Link>
        </div>
       
      </div>
      <Row className="g-4">
            {displayData?.map(part => (
              <Col key={part._id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                <ChoicesItems part={part} />
              </Col>
            ))}
          </Row>
   
  </div>
  
  )
}

export default Choices