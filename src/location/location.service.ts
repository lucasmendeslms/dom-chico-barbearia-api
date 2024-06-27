import { Injectable } from '@nestjs/common';

import { CreateCity } from './dto/create-city.dto';
import { CreateAddress } from './dto/create-address.dto';
import { CreateState } from './dto/create-state.dto';

import { AddressRepository } from './repositories/addressRepository';
import { CityRepository } from './repositories/cityRepository';
import { StateRepository } from './repositories/stateRepository';

@Injectable()
export class LocationService {
  constructor(
    private addressRepository: AddressRepository,
    private cityRepository: CityRepository,
    private stateRepository: StateRepository,
  ) {}

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
