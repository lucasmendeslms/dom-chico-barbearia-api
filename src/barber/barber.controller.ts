import { Controller } from '@nestjs/common';
import { BarberService } from './barber.service';

@Controller('barbers')
export class BarberController {
  constructor(private readonly barberService: BarberService) {}
}
