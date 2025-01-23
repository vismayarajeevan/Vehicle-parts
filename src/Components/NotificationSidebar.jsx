import { Bell } from 'lucide-react'
import React from 'react'
import { Offcanvas } from 'react-bootstrap'



const NotificationSidebar = ({showNotifications,setShowNotifications}) => {
  return (
    <Offcanvas show={showNotifications} onHide={()=>setShowNotifications(false)} placement='end'>
    <Offcanvas.Header closeButton className="border-bottom">
      <Offcanvas.Title>Notifications</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      {/* 1st notifications */}
      <div className="p-3 border-bottom bg-light" style={{ cursor: 'pointer' }}>
        <div className='d-flex gap-3'>
         <Bell className='text-primary' size={20} />
         <div className='flex-grow-1'>
          <h6 className='mb-1'>New Arrival</h6>
          <p className='mb-1 text-muted'>Check out our new brake pads collection!</p>
          <small className='text-muted'>2 hours ago</small>
          </div>
          
      </div>
      </div>

        {/* 2nd notifications */}
        <div className="p-3 border-bottom bg-light" style={{ cursor: 'pointer' }}>
        <div className='d-flex gap-3'>
         <Bell className='text-primary' size={20} />
         <div className='flex-grow-1'>
          <h6 className='mb-1'>Special Offer</h6>
          <p className='mb-1 text-muted'>Get 20% off on all engine parts this week</p>
          <small className='text-muted'>5 hours ago</small>
          </div>
          
      </div>
      </div>
    </Offcanvas.Body>

   </Offcanvas>
  )
}

export default NotificationSidebar