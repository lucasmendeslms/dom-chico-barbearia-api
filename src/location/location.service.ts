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
    const { name, state } = cityData;

    const stateId: number = await this.createState(state);

    return await this.cityRepository.createCity({ name, stateId });
  }

  async createState(stateData: CreateState): Promise<number> {
    const { name, stateAcronym } = stateData;

    return await this.stateRepository.createState({
      name,
      stateAcronym,
    });
  }

  async createDefaultStates(): Promise<void> {
    const statesList: State[] = [
      { name: 'Acre', stateAcronym: 'AC' },
      { name: 'Alagoas', stateAcronym: 'AL' },
      { name: 'Amapá', stateAcronym: 'AP' },
      { name: 'Amazonas', stateAcronym: 'AM' },
      { name: 'Bahia', stateAcronym: 'BA' },
      { name: 'Ceará', stateAcronym: 'CE' },
      { name: 'Distrito Federal', stateAcronym: 'DF' },
      { name: 'Espírito Santo', stateAcronym: 'ES' },
      { name: 'Goiás', stateAcronym: 'GO' },
      { name: 'Maranhão', stateAcronym: 'MA' },
      { name: 'Mato Grosso', stateAcronym: 'MT' },
      { name: 'Mato Grosso do Sul', stateAcronym: 'MS' },
      { name: 'Minas Gerais', stateAcronym: 'MG' },
      { name: 'Pará', stateAcronym: 'PA' },
      { name: 'Paraíba', stateAcronym: 'PB' },
      { name: 'Paraná', stateAcronym: 'PR' },
      { name: 'Pernambuco', stateAcronym: 'PE' },
      { name: 'Piauí', stateAcronym: 'PI' },
      { name: 'Rio de Janeiro', stateAcronym: 'RJ' },
      { name: 'Rio Grande do Norte', stateAcronym: 'RN' },
      { name: 'Rio Grande do Sul', stateAcronym: 'RS' },
      { name: 'Rondônia', stateAcronym: 'RO' },
      { name: 'Roraima', stateAcronym: 'RR' },
      { name: 'Santa Catarina', stateAcronym: 'SC' },
      { name: 'São Paulo', stateAcronym: 'SP' },
      { name: 'Sergipe', stateAcronym: 'SE' },
      { name: 'Tocantins', stateAcronym: 'TO' },
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
