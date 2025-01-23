import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import { Modal } from 'react-bootstrap';



const containerStyle = {
    width: '100%',
    height: '200px',
  };
  
  const defaultCenter = {
    lat: 10.8505, // Default latitude (e.g., Kerala)
    lng: 76.2711, // Default longitude (e.g., Kerala)
  };
const GoogleMapView = ({ onLocationSelect, selectedLocation }) => {
   

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDdSnydUNpyRWhzBj5QkdnTVyxfa7Vq2L8', // Replace with your API key
      });
    
      const [markerPosition, setMarkerPosition] = useState(defaultCenter);
     
      const [show, setShow] = useState(false);
    
      useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setMarkerPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              console.error("Error fetching current location:", error);
              // If location access is denied or an error occurs, default values remain
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }, []);

    
    
     const handleMapClick = (event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newPosition);
    onLocationSelect(newPosition); // Pass the selected location to the parent
  };
  console.log(markerPosition);
  
  
  
    
    //   modal
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
         <div>
             <div className="d-flex align-items-center justify-content-between pb-3">
                        <h3 className="AddFontSize" >Location</h3>
                        <button className='btn' onClick={handleShow}>
                            <Icon icon="material-symbols-light:my-location"
                                    style={{ fontSize: "24px", color: "#000" }}
                                  ></Icon>
                        </button>
                     </div>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={markerPosition}
                zoom={10}
                onClick={handleMapClick}
              >
                <Marker position={markerPosition} />
              </GoogleMap>
              {selectedLocation && (
                <p className="mt-2" style={{fontSize:'10px'}}>
                  Selected Location: Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
                </p>
              )}

    
              
            </div>
            {/* modal */}
            <Modal size='lg' show={show} centered onHide={handleClose}>
            <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
           <Modal.Body>
           <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
          
          {selectedLocation && (
                <p className="mt-2">
                  Selected Location: Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
                </p>
              )}
           </Modal.Body>
           <Modal.Footer>
          <button className="btn btn-primary" onClick={() => setShow(false)}>
            Confirm Location
          </button>
        </Modal.Footer>
         </Modal>
    </>

        

        

    )
}

export default GoogleMapView