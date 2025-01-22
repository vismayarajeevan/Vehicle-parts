import React from 'react'
import { Card } from 'react-bootstrap'
import choice_img from '../assets/choices.png'
import { Link } from 'react-router-dom'

const Choices = () => {
  return (
   <div className='p-5'>
    <div className='d-flex align-items-center justify-content-between'>
      <h1 style={{fontWeight:'700', fontSize:'25px', marginBottom:'70px'}}>Your choices</h1>
      <Link to={'/choices'}>See all</Link>

    </div>
    
    <Link to={'/overview'} style={{textDecoration:'none'}}>
    <Card style={{ width: '18rem' }}>
      <div className='p-3'>
        <Card.Img variant="top" src={choice_img} />
        </div>
     
      <Card.Body>
        <Card.Title style={{fontWeight:'600'}}>Card Title</Card.Title>
        <Card.Text style={{ display: '-webkit-box',WebkitBoxOrient: 'vertical',overflow: 'hidden',WebkitLineClamp: 2,}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>   
      </Card.Body>
    </Card>
    </Link>

   </div>
  )
}

export default Choices