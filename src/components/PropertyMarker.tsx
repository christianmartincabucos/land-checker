// PropertyMarker.tsx
import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Property } from '../models/Property';

interface PropertyMarkerProps {
  property: Property;
  onMarkerClick: (property: Property) => void;
  selectedProperty: Property | null;
  onCloseClick: () => void;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property, onMarkerClick, selectedProperty, onCloseClick }) => {
  const { latitude, longitude, full_address, council, postcode } = property;
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
          <div>
            <h2>{full_address}</h2>
            <p>{council}</p>
            <p>{postcode}</p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default PropertyMarker;
