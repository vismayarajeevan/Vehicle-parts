import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, Autocomplete, Marker, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"]; // Ensures Google Places API is loaded

const MapView = () => {
  
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const autocompleteRef = useRef(null);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`, // Replace with your actual API key
    libraries,
  });

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const pos = { lat: latitude, lng: longitude };
          setCurrentLocation(pos);
          setSelectedLocation(pos);
          setMarkers([pos]); // Add a marker at the current location
        },
        () => {
          alert("Location access denied. Defaulting to (0,0).");
          setCurrentLocation({ lat: 0, lng: 0 });
          setSelectedLocation({ lat: 0, lng: 0 });
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handles place selection from Autocomplete
  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (!place.geometry || !place.geometry.location) {
        console.log("No geometry found for the selected place.");
        return;
      }

      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      setSelectedLocation(location);
      setMarkers([location]);

      // Center map to selected place
      if (map) {
        map.panTo(location);
        map.setZoom(14);
      }
    }
  };

  // Handles manual selection of location on map
  const onMapClick = (event) => {
    const clickedLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setSelectedLocation(clickedLocation);
    setMarkers([clickedLocation]);
  };

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Search Box with Autocomplete */}
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
        <Autocomplete
          onLoad={(ref) => (autocompleteRef.current = ref)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Search a location..."
            style={{
              width: "300px",
              height: "40px",
              padding: "8px",
              borderRadius: "5px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
              outline: "none",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </Autocomplete>
      </div>

      {/* Google Map */}
      <GoogleMap
        center={selectedLocation || currentLocation}
        zoom={12}
        onLoad={(map) => setMap(map)}
        onClick={onMapClick}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {markers.map((mark, index) => (
          <Marker
            key={index}
            position={mark}
            draggable={true} // Allow marker to be dragged
            onDragEnd={(event) => {
              const draggedLocation = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              };
              setSelectedLocation(draggedLocation);
              setMarkers([draggedLocation]);
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapView;


