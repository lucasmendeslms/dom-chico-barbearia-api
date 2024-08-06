import { City } from '../entities/city.entity';

export abstract class CityRepository {
  abstract createCity(cityData: City): Promise<number>;
  abstract findCitiesWithBarbershop(stateId: number): Promise<City[]>;
  abstract findCityById(id: number): Promise<City>;
}
