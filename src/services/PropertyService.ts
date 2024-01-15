// src/services/PropertyService.ts
import { Property } from '../models/Property';
import { Properties } from '../data/properties';

export class PropertyService {
  async fetchProperties(): Promise<Property[]> {
    return Properties;
  }
  getCouncils(): string[] {
    const councils = Properties.map(property => property.council);
    const uniqueCouncils = Array.from(new Set(councils));
    return uniqueCouncils;
  }
}
