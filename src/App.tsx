import { useEffect, useState } from 'react';
import './App.css';
import { Filter } from './components/Filter';
import { Map } from './components/Map';
import { Property } from './models/Property';
import { PropertyService } from './services/PropertyService';


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
    <main className="relative h-screen p-5">
      <Filter councils={councils} onFilterChange={handleFilterChange} />
      <Map properties={filteredProperties} />
    </main>
  );
}

export default App;
