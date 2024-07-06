import { Injectable, OnModuleInit } from '@nestjs/common';

import { CreateCity } from './dto/create-city.dto';
import { CreateAddress } from './dto/create-address.dto';
import { CreateState } from './dto/create-state.dto';

import { AddressRepository } from './repositories/addressRepository';
import { CityRepository } from './repositories/cityRepository';
import { StateRepository } from './repositories/stateRepository';
import { State } from './entities/state.entity';

@Injectable()
export class LocationService implements OnModuleInit {
  constructor(
    private addressRepository: AddressRepository,
    private cityRepository: CityRepository,
    private stateRepository: StateRepository,
  ) {}

  async onModuleInit(): Promise<void> {
    const countStates: number = await this.stateRepository.countStates();

    if (countStates < 27) {
      await this.createDefaultStates();
    }
  }

  async createAddress(addressData: CreateAddress): Promise<number> {
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

  async createCity(cityData: CreateCity): Promise<number> {
    return await this.cityRepository.createCity(cityData);
  }

  async createState(stateData: CreateState): Promise<number> {
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

  findAll() {
    return `This action returns all location`;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
