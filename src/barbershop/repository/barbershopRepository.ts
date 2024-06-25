import { CreateBarbershopDto } from '../dto/create-barbershop.dto';
// import { Barbershop } from '../entities/barbershop.entity';

export abstract class BarbershopRepository {
  abstract create(data: CreateBarbershopDto): Promise<void>;
}
