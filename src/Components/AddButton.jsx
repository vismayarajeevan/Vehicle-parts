import React, { useState } from 'react'
import { Button, Form, InputGroup, Offcanvas } from 'react-bootstrap'

const AddButton = () => {
    // state for sidebar open and close
    const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);
    
    // function to show sidebar
    const handleAddProducts =()=>{
        setIsAddProductSidebarOpen(!isAddProductSidebarOpen)
    }

    // state for button active
    const [activeButton, setActiveButton] =useState(1)

  return (
   <>
   <Button onClick={handleAddProducts} className="btn position-fixed bottom-0 end-0 m-4 ps-3 pe-3 shadow-lg"
      style={{  display: 'flex', alignItems: 'center', justifyContent: 'center',zIndex: 1,backgroundColor:'#008E8E',borderRadius:'50px', border:'none'}}>
     Add <i class="fa-solid fa-square-plus ms-2" style={{color: '#ffffff'}}></i>
   </Button>


   {/* side bar */}
   <Offcanvas show={isAddProductSidebarOpen} onHide={()=>setIsAddProductSidebarOpen(false)} placement='end'>
    <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title>Add Parts</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Form>
        {/* input field */}
           <Form.Group className='mb-3' controlId='formPartName'>
             <Form.Label>Part Name</Form.Label>
             <InputGroup>
             <Form.Control type='text' />
             </InputGroup>
             </Form.Group>

             {/* category */}
             <Form.Group className='mb-3'>
             <Form.Label>Category</Form.Label>
                <div className='d-flex flex-wrap gap-2 mt-2'>
                    <Button onClick={()=>setActiveButton(1)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===1? '#008E8E':'grey' }}>
                        Car
                    </Button>
                    <Button onClick={()=>setActiveButton(2)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===2? '#008E8E':'grey' }}>
                        Bike
                    </Button>
                    <Button onClick={()=>setActiveButton(3)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===3? '#008E8E':'grey' }}>
                        Bus
                    </Button>
                    <Button onClick={()=>setActiveButton(4)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===4? '#008E8E':'grey' }}>
                        Cycle
                    </Button>
                    <Button onClick={()=>setActiveButton(5)} style={{ width: '70px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===5? '#008E8E':'grey' }}>
                        Scooty
                    </Button>
                    <Button onClick={()=>setActiveButton(3)} style={{ width: '70px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===3? '#008E8E':'grey' }}>
                        Others
                    </Button>
                </div>
                </Form.Group>

                {/* condition */}
                <Form.Group className='mb-3'>
                <Form.Label>Condition</Form.Label>
                <div className='d-flex flex-wrap gap-2 mt-2'>
                    <Button onClick={()=>setActiveButton(1)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===1? '#E7B307':'grey' }}>
                        New
                    </Button>
                    <Button onClick={()=>setActiveButton(2)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===2? '#E7B307':'grey' }}>
                        Used
                    </Button>
                </div>
             </Form.Group>

             {/* description  */}
             <Form.Group className='mb-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control as={'textarea'} rows={3}></Form.Control>  
             </Form.Group>
             <Form.Group className='mb-3'>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type='number' ></Form.Control>  
             </Form.Group>
            
    </Form>

    </Offcanvas.Body>

   </Offcanvas>
   </>
  )
}

export default AddButton