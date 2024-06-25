import { City } from './city.entity';

export interface Address {
  street: string;
  neighborhood: string;
  number: string;
  zipcode: string;
  city: City;
}
