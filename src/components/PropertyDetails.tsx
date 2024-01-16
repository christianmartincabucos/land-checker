import React from 'react';
import { Property } from '../models/Property';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <div className="flex flex-col p-2">
      <p className="pb-1">
        <label className="font-semibold">Address: </label> {property.full_address}
        </p>
      <p className="pb-1">
        <label className="font-semibold">Council: </label> {property.council}
        </p>
      <p className="pb-1">
        <label className="font-semibold">Postcode:</label>  {property.postcode}
        </p>
    </div>
  );
};

export default PropertyDetails;
