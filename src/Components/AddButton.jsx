import { Icon } from '@iconify-icon/react/dist/iconify.js';
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

    const [actionCondition, setActiveCondition] =useState(1)

    // Set initial state to the value of the first radio button
  const [availability, setAvailability] = useState('available');

  const handleChange = (e) => {
    setAvailability(e.target.value);
  };

//   state for image
const [image, setImage] = useState(null)

// function to take input image
const handleImageChange =(e)=>{
    const file = e.target.files[0]
    if(file){
        const imgURL = URL.createObjectURL(file)
        setImage(imgURL)
    }
}

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
             <Form.Label className='AddFontSize'>Part Name</Form.Label>
             <InputGroup>
             <Form.Control type='text' />
             </InputGroup>
             </Form.Group>

             {/* category */}
             <Form.Group className='mb-3'>
             <Form.Label className='AddFontSize'>Category</Form.Label>
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
                    <Button onClick={()=>setActiveButton(6)} style={{ width: '70px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: activeButton ===6? '#008E8E':'grey' }}>
                        Others
                    </Button>
                </div>
                </Form.Group>

                {/* condition */}
                <Form.Group className='mb-3'>
                <Form.Label className='AddFontSize'>Condition</Form.Label>
                <div className='d-flex flex-wrap gap-2 mt-2'>
                    <Button onClick={()=>setActiveCondition(1)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: actionCondition ===1? '#E7B307':'grey' }}>
                        New
                    </Button>
                    <Button onClick={()=>setActiveCondition(2)} style={{ width: '65px', height: '35px',borderRadius:'20px',border:'none',backgroundColor: actionCondition ===2? '#E7B307':'grey' }}>
                        Used
                    </Button>
                </div>
             </Form.Group>

             {/* description  */}
             <Form.Group className='mb-3'>
                <Form.Label className='AddFontSize'>Description</Form.Label>
                <Form.Control as={'textarea'} rows={3}></Form.Control>  
             </Form.Group>
             {/* contact */}
             <Form.Group className='mb-3'>
                <Form.Label className='AddFontSize'>Contact Number</Form.Label>
                <Form.Control type='number' ></Form.Control>  
             </Form.Group>

             <Form.Group className='mb-3'>
                <Form.Label className='AddFontSize'>Availability</Form.Label>
              <div className='d-flex align-items-center gap-3 mt-2'>
                  <Form.Check type='radio' label="Yes" name="availability" value="available" id="available" checked={availability ==='available'} onChange={handleChange}></Form.Check> 
                  <Form.Check type='radio' label="No" name="availability" value="not-available" id="not-available" checked={availability ==='not-available'} onChange={handleChange}></Form.Check> 
                  </div>
              
             </Form.Group>

             <Form.Group className='mb-3'>
                <Form.Label className='AddFontSize'>Images</Form.Label>
                <div className='d-flex align-items-center justify-content-center'>
                    <button className='btn d-flex align-items-center justify-content-center' style={{backgroundColor:'#E1E1E1'}}><Icon icon="solar:upload-bold" style={{ fontSize: '24px', color: '#000' }}></Icon> Upload</button>
                </div>
                <Form.Control type="file"  accept="image/*"  onChange={handleImageChange}  ></Form.Control>  
             </Form.Group>
            
    </Form>

    </Offcanvas.Body>

   </Offcanvas>
   </>
  )
}

export default AddButton