import { Address } from '../entities/address.entity';

export abstract class AddressRepository {
  abstract createAddress(addressData: Address): Promise<number>;
}
