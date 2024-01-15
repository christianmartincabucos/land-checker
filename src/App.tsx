import React, { useState, useEffect } from 'react';
import { Map } from './components/Map';
import { Filter } from './components/Filter';
import { PropertyService } from './services/PropertyService';
import { Property } from './models/Property';


const App = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [councils, setCouncils] = useState<string[]>([]);

  useEffect(() => {
    const fetchPropertiesAndCouncils = async () => {
      const propertyService = new PropertyService();
      const properties = await propertyService.fetchProperties();
      const councils = propertyService.getCouncils();
  
      setProperties(properties);
      setCouncils(councils);
      setFilteredProperties(properties);
    };
    
    fetchPropertiesAndCouncils();
  }, []);
  
  const handleFilterChange = (selectedCouncil: string) => {
    const filteredProperties = properties.filter(property => property.council === selectedCouncil);
    setFilteredProperties(filteredProperties);
  };

  return (
    <div className="App">
      <Filter councils={councils} onFilterChange={handleFilterChange} />
      <Map properties={filteredProperties} />
    </div>
  );
}

export default App;
