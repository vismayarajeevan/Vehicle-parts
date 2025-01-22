import React, { useEffect, useState } from 'react'


import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '200px',
  };
  
  const defaultCenter = {
    lat: 10.8505, // Default latitude (e.g., Kerala)
    lng: 76.2711, // Default longitude (e.g., Kerala)
  };
const GoogleMapView = () => {
   

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDdSnydUNpyRWhzBj5QkdnTVyxfa7Vq2L8', // Replace with your API key
      });
    
      const [markerPosition, setMarkerPosition] = useState(defaultCenter);
    
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
        setMarkerPosition({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
      };
    
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
    

  return (
     <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={markerPosition} />
          </GoogleMap>
          {/* <p>
            Selected Location: Latitude: {markerPosition.lat}, Longitude: {markerPosition.lng}
          </p> */}
        </div>
  )
}

export default GoogleMapView