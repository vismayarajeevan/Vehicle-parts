// import React, { useEffect, useState } from 'react'
// import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
// import { Icon } from '@iconify-icon/react/dist/iconify.js';
// import { Modal } from 'react-bootstrap';



// const containerStyle = {
//     width: '100%',
//     height: '200px',
//   };
  
//   const defaultCenter = {
//     lat: 10.8505, // Default latitude (e.g., Kerala)
//     lng: 76.2711, // Default longitude (e.g., Kerala)
//   };
// const GoogleMapView = ({ onLocationSelect, selectedLocation }) => {
   

//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: 'AIzaSyDdSnydUNpyRWhzBj5QkdnTVyxfa7Vq2L8', // Replace with your API key
//       });
    
//       const [markerPosition, setMarkerPosition] = useState(defaultCenter);
     
//       const [show, setShow] = useState(false);
    
//       useEffect(() => {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               setMarkerPosition({
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//               });
//             },
//             (error) => {
//               console.error("Error fetching current location:", error);
//               // If location access is denied or an error occurs, default values remain
//             }
//           );
//         } else {
//           console.error("Geolocation is not supported by this browser.");
//         }
//       }, []);

    
    
//     const handleMapClick = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setMarkerPosition(newPosition);
//     onLocationSelect(newPosition); // Pass the selected location to the parent
//   };
//   console.log(markerPosition);
  
  
  
    
//     //   modal
 

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
    
//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//          <div>
//              <div className="d-flex align-items-center justify-content-between pb-3">
//                         <h3 className="AddFontSize" >Location</h3>
//                         <button className='btn' onClick={handleShow}>
//                             <Icon icon="material-symbols-light:my-location"
//                                     style={{ fontSize: "24px", color: "#000" }}
//                                   ></Icon>
//                         </button>
//                      </div>
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={markerPosition}
//                 zoom={10}
//                 onClick={handleMapClick}
//               >
//                 <MarkerF position={markerPosition} />
//               </GoogleMap>
//               {selectedLocation && (
//                 <p className="mt-2" style={{fontSize:'10px'}}>
//                   Selected Location: Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
//                 </p>
//               )}

    
              
//             </div>
//             {/* modal */}
//             <Modal size='lg' show={show} centered onHide={handleClose}>
//             <Modal.Header closeButton>
//           <Modal.Title>Select Location</Modal.Title>
//         </Modal.Header>
//            <Modal.Body>
//            <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={markerPosition}
//             zoom={10}
//             onClick={handleMapClick}
//           >
//             <MarkerF position={markerPosition} />
//           </GoogleMap>
          
//           {selectedLocation && (
//                 <p className="mt-2">
//                   Selected Location: Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
//                 </p>
//               )}
//            </Modal.Body>
//            <Modal.Footer>
//           <button className="btn btn-primary" onClick={() => setShow(false)}>
//             Confirm Location
//           </button>
//         </Modal.Footer>
//          </Modal>
//     </>

        

        

//     )
// }

// export default GoogleMapView


// import React, { useEffect, useState, useRef } from "react";
// import { GoogleMap, MarkerF, Autocomplete, useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
// import { Icon } from "@iconify-icon/react/dist/iconify.js";
// import { Modal } from "react-bootstrap";

// const containerStyle = {
//   width: "100%",
//   height: "200px",
// };

// const defaultCenter = {
//   lat: 10.8505, // Default latitude (e.g., Kerala)
//   lng: 76.2711, // Default longitude (e.g., Kerala)
// };

// const GoogleMapView = ({ onLocationSelect, selectedLocation }) => {
//   const inputRef = useRef(null)
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyDdSnydUNpyRWhzBj5QkdnTVyxfa7Vq2L8", // Replace with your API key
//     libraries: ["places"], // Load the places library
//   });

//   const [markerPosition, setMarkerPosition] = useState(defaultCenter);
//   const [show, setShow] = useState(false);
//   const autocompleteRef = useRef(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setMarkerPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error("Error fetching current location:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   // const handlePlaceSelected = () => {
//   //   if (autocompleteRef.current) {
//   //     const place = autocompleteRef.current.getPlace();
//   //     if (place.geometry && place.geometry.location) {
//   //       const newPosition = {
//   //         lat: place.geometry.location.lat(),
//   //         lng: place.geometry.location.lng(),
//   //       };
//   //       setMarkerPosition(newPosition);
//   //       onLocationSelect(newPosition);

//   //       // Center the map on the selected place
//   //       if (mapRef.current) {
//   //         mapRef.current.panTo(newPosition);
//   //         mapRef.current.setZoom(15); // Optional: Adjust zoom level
//   //       }
//   //     } else {
//   //       console.error("No geometry found for the selected place.");
//   //     }
//   //   }
//   // };

//   const handleOneplacesChanged =()=>{
//     let address = inputRef.current.getPlaces()
//     console.log("addres",address);
    
//   }



//   const handleMapClick = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setMarkerPosition(newPosition);
//     onLocationSelect(newPosition);
//   };

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <div className="d-flex align-items-center justify-content-between pb-3">
//           <h3 className="AddFontSize">Location</h3>
//           <button className="btn" onClick={handleShow}>
//             <Icon
//               icon="material-symbols-light:my-location"
//               style={{ fontSize: "24px", color: "#000" }}
//             ></Icon>
//           </button>
//         </div>

//         {/* <Autocomplete
//           onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
//           onPlaceChanged={handlePlaceSelected}
//         > */}

//          {isLoaded &&
//         <StandaloneSearchBox
//         onLoad={(ref)=>inputRef.current =ref}
//         onPlacesChanged={handleOneplacesChanged}>
//           <input
//             type="text"
//             placeholder="Search for a location"
//             className="form-control mb-3"
//             style={{ width: "100%" }}
//           />
//           </StandaloneSearchBox>
// }
//         {/* </Autocomplete> */}

//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={markerPosition}
//           zoom={10}
//           onClick={handleMapClick}
//           onLoad={(map) => (mapRef.current = map)}
//         >
//           <MarkerF position={markerPosition} />
//         </GoogleMap>

//         {selectedLocation && (
//           <p className="mt-2" style={{ fontSize: "10px" }}>
//             Selected Location: Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
//           </p>
//         )}
//       </div>

//       {/* Modal */}
//       <Modal size="lg" show={show} centered onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Select Location</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={markerPosition}
//             zoom={10}
//             onClick={handleMapClick}
//           >
//             <MarkerF position={markerPosition} />
//           </GoogleMap>
//           {selectedLocation && (
//             <p className="mt-2">
//               Selected Location: Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
//             </p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <button className="btn btn-primary" onClick={handleClose}>
//             Confirm Location
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default GoogleMapView;


import React, { useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { Icon } from "@iconify-icon/react";
import { Modal } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const defaultCenter = {
  lat: 10.8505, // Default latitude (e.g., Kerala)
  lng: 76.2711, // Default longitude (e.g., Kerala)
};

const GoogleMapView = ({ onLocationSelect, selectedLocation }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDdSnydUNpyRWhzBj5QkdnTVyxfa7Vq2L8", // Replace with your API key
    libraries: ["places"], // Load the places library
  });

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [show, setShow] = useState(false);
  const searchBoxRef = useRef(null);
  const mapRef = useRef(null);

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
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handlePlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) return;

    const place = places[0];
    const newPosition = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setMarkerPosition(newPosition);
    onLocationSelect(newPosition);

    if (mapRef.current) {
      mapRef.current.panTo(newPosition);
    }
  };

  const handleMapClick = (event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(newPosition);
    onLocationSelect(newPosition);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="d-flex align-items-center justify-content-between pb-3">
          <h3 className="AddFontSize">Location</h3>
          <button className="btn" onClick={handleShow}>
            <Icon
              icon="material-symbols-light:my-location"
              style={{ fontSize: "24px", color: "#000" }}
            />
          </button>
        </div>

        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={handlePlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for a location"
            className="form-control mb-3"
            style={{ width: "100%" }}
          />
        </StandaloneSearchBox>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={10}
          onClick={handleMapClick}
          onLoad={(map) => (mapRef.current = map)}
        >
          <MarkerF position={markerPosition} />
        </GoogleMap>

        {selectedLocation && (
          <p className="mt-2" style={{ fontSize: "10px" }}>
            Selected Location: Latitude: {selectedLocation.lat}, Longitude:{" "}
            {selectedLocation.lng}
          </p>
        )}
      </div>

      {/* Modal */}
      <Modal size="lg" show={show} centered onHide={handleClose}>
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
            <MarkerF position={markerPosition} />
          </GoogleMap>
          {selectedLocation && (
            <p className="mt-2">
              Selected Location: Latitude: {selectedLocation.lat}, Longitude:{" "}
              {selectedLocation.lng}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            Confirm Location
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GoogleMapView;
