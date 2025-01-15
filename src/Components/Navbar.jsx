import React from 'react'
import logo from '../assets/logo.jpeg'
import shape from '../assets/NavShape.png'
import user from '../assets/user.svg'
import notification from '../assets/notification.png'


const Navbar = () => {
  return (
    <>
    <div>
       
           <div className='container-fluid d-flex justify-content-between align-items-center'>
          
            <a href="" ><img src={logo}  className='img-fluid' width="70px" alt="" /></a>
            
           
           <input type="text" placeholder='Search here..' className='rounded p-2 flex-grow-1'  style={{ maxWidth: "500px", border:'none', background:'#F0F0F0', marginLeftLeft: "150px"  }}/>
          
           
                <ul className=' d-flex justify-content-between align-items-center mb-0' style={{listStyle:'none', marginRight:'150px',gap:'60px'}}>
                    <li><a style={{ textDecoration: "none", color: "inherit" }} href="">Home</a></li>
                    <li><a style={{ textDecoration: "none", color: "inherit" }} href="">My Posts</a></li>
                    <li><a style={{ textDecoration: "none", color: "inherit" }} href="">Designs</a></li>
                </ul>
                <div className='position-relative'>
                    <img src={shape} width={'200px'} style={{ right: "0", top: "0", width: "200px", zIndex: "1",}} alt="Shape"  />
                    <img src={user}  className="position-absolute" style={{ right: "100px", top: "15px", zIndex: "2", width:'50px', borderRadius: "50%", }} alt="" />
                    <img src={notification} style={{ position: "absolute", top: "20px", left: "160px", width: "20px", zIndex: "3",}} alt="" />
                </div>
          </div> 
          <div className="flex items-center text-sm text-gray-600" style={{paddingLeft:'160px'}}>
          <button className='btn' style={{color:'red'}}><i class="fa-solid fa-location-dot"></i></button>
            <span>Kochi, Kerala 560034</span>
          </div>
    </div>




    </>
  )
}

export default Navbar