


import React, { useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  StandaloneSearchBox,
  Autocomplete,
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
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`, // Replace with your API key
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

        <Autocomplete>
        <input
            type="text"
            placeholder="Search for a location"
            className="form-control mb-3"
            style={{ width: "100%" }}
          />
        </Autocomplete>

        {/* <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={handlePlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for a location"
            className="form-control mb-3"
            style={{ width: "100%" }}
          />
        </StandaloneSearchBox> */}

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



