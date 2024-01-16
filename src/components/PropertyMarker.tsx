// PropertyMarker.tsx
import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Property } from '../models/Property';
import PropertyDetails from './PropertyDetails';

interface PropertyMarkerProps {
  property: Property;
  onMarkerClick: (property: Property) => void;
  selectedProperty: Property | null;
  onCloseClick: () => void;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property, onMarkerClick, selectedProperty, onCloseClick }) => {
  const { latitude, longitude } = property;
  const position = { lat: latitude, lng: longitude };

  return (
    <Marker 
      position={position} 
      onClick={() => onMarkerClick(property)}
    >
      {selectedProperty === property && (
        <InfoWindow
          position={position}
          onCloseClick={onCloseClick}
        >
          <PropertyDetails property={property}/>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default PropertyMarker;
