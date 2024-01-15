// Map.tsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PropertyMarker from '../components/PropertyMarker';
import { Property } from '../models/Property';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

interface MapProps {
  properties: Property[];
}

export const Map: React.FC<MapProps> = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [address, setAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    throw new Error('Google Maps API key is not set');
  }

  const handleMarkerClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseClick = () => {
    setSelectedProperty(null);
  };

  // const handleSelect = async (value: string) => {
  //   const results = await geocodeByAddress(value);
  //   const latLng = await getLatLng(results[0]);
  //   setAddress(value);
  //   setCoordinates({ lat: Number(latLng.lat), lng: Number(latLng.lng) });
  // };
  
  

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates || (properties[0] ? { lat: properties[0].latitude, lng: properties[0].longitude } : undefined)}
        zoom={10}
      >
        {properties.map((property, index) => (
          <PropertyMarker 
            key={index} 
            property={property} 
            onMarkerClick={handleMarkerClick} 
            selectedProperty={selectedProperty} 
            onCloseClick={handleCloseClick}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
