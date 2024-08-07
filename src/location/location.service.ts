import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';

import { CityDto } from './dto/city.dto';
import { AddressDto } from './dto/address.dto';
import { StateDto } from './dto/state.dto';

import { AddressRepository } from './repositories/addressRepository';
import { CityRepository } from './repositories/cityRepository';
import { StateRepository } from './repositories/stateRepository';
import { State } from './entities/state.entity';
import { City } from './entities/city.entity';
import { Barbershop } from 'src/barbershop/entities/barbershop.entity';
import { BarbershopService } from 'src/barbershop/barbershop.service';

@Injectable()
export class LocationService implements OnModuleInit {
  constructor(
    private addressRepository: AddressRepository,
    private cityRepository: CityRepository,
    private stateRepository: StateRepository,
    @Inject(forwardRef(() => BarbershopService))
    private barbershopService: BarbershopService,
  ) {}

  async onModuleInit(): Promise<void> {
    const countStates: number = await this.stateRepository.countStates();

    if (countStates < 27) {
      await this.createDefaultStates();
    }
  }

  //ADDRESS

  async createAddress(addressData: AddressDto): Promise<number> {
    const { street, neighborhood, number, zipcode, city } = addressData;

    const cityId: number = await this.createCity(city);

    return await this.addressRepository.createAddress({
      street,
      neighborhood,
      number,
      zipcode,
      cityId,
    });
  }

  //CITY

  async createCity(cityData: CityDto): Promise<number> {
    return await this.cityRepository.createCity(cityData);
  }

  async findCitiesWithBarbershop(stateId: number): Promise<City[]> {
    await this.findStateById(stateId);

    const cities: City[] =
      await this.cityRepository.findCitiesWithBarbershop(stateId);

    if (!cities) {
      throw new NotFoundException('There are no cities with barbershops');
    }

    return cities;
  }

  async findCityById(id: number): Promise<City> {
    const city: City = await this.cityRepository.findCityById(id);

    if (!city) {
      throw new BadRequestException('Invalid city id');
    }

    return city;
  }

  async findBarbershopsByCity(cityId: number): Promise<Barbershop[]> {
    return await this.barbershopService.findBarbershopsInCity(cityId);
  }

  //STATE

  async createState(stateData: StateDto): Promise<number> {
    const { name, abbreviation } = stateData;

    return await this.stateRepository.createState({
      name,
      abbreviation,
    });
  }

  async createDefaultStates(): Promise<void> {
    const statesList: State[] = [
      { name: 'Acre', abbreviation: 'AC' },
      { name: 'Alagoas', abbreviation: 'AL' },
      { name: 'Amapá', abbreviation: 'AP' },
      { name: 'Amazonas', abbreviation: 'AM' },
      { name: 'Bahia', abbreviation: 'BA' },
      { name: 'Ceará', abbreviation: 'CE' },
      { name: 'Distrito Federal', abbreviation: 'DF' },
      { name: 'Espírito Santo', abbreviation: 'ES' },
      { name: 'Goiás', abbreviation: 'GO' },
      { name: 'Maranhão', abbreviation: 'MA' },
      { name: 'Mato Grosso', abbreviation: 'MT' },
      { name: 'Mato Grosso do Sul', abbreviation: 'MS' },
      { name: 'Minas Gerais', abbreviation: 'MG' },
      { name: 'Pará', abbreviation: 'PA' },
      { name: 'Paraíba', abbreviation: 'PB' },
      { name: 'Paraná', abbreviation: 'PR' },
      { name: 'Pernambuco', abbreviation: 'PE' },
      { name: 'Piauí', abbreviation: 'PI' },
      { name: 'Rio de Janeiro', abbreviation: 'RJ' },
      { name: 'Rio Grande do Norte', abbreviation: 'RN' },
      { name: 'Rio Grande do Sul', abbreviation: 'RS' },
      { name: 'Rondônia', abbreviation: 'RO' },
      { name: 'Roraima', abbreviation: 'RR' },
      { name: 'Santa Catarina', abbreviation: 'SC' },
      { name: 'São Paulo', abbreviation: 'SP' },
      { name: 'Sergipe', abbreviation: 'SE' },
      { name: 'Tocantins', abbreviation: 'TO' },
    ];

    await this.stateRepository.createDefaultStates(statesList);
  }

  async findStatesWithBarbershop() {
    const statesWithBarbershop: State[] =
      await this.stateRepository.findStatesWithBarbershop();

    if (!statesWithBarbershop.length) {
      throw new NotFoundException('There are no states with barbershops');
    }

    return statesWithBarbershop;
  }

  async findStateById(id: number): Promise<State> {
    const state: State = await this.stateRepository.findStateById(id);

    if (!state) {
      throw new BadRequestException('Invalid state id');
    }

    return state;
  }

  // update(id: number) {
  //   return `This action updates a #${id} location`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} location`;
  // }
}
