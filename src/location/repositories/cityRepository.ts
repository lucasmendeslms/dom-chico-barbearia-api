import { City } from '../entities/city.entity';

export abstract class CityRepository {
  abstract createCity(cityData: City): Promise<number>;
}
