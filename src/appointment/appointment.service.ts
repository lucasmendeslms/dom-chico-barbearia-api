import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AppointmentRepository } from './repositories/appointmentRepository';
import { AppointmentDto } from './dto/appointment.dto';
import { BarberService } from 'src/barber/barber.service';
import { UserService } from 'src/user/user.service';
import { BarbershopService } from 'src/barbershop/barbershop.service';

@Injectable()
export class AppointmentService {
  constructor(
    // @Inject(forwardRef(() => LocationService))
    // private locationService: LocationService,
    @Inject(forwardRef(() => BarberService))
    @Inject(forwardRef(() => UserService))
    @Inject(forwardRef(() => BarbershopService))
    private barberService: BarberService,
    private userService: UserService,
    private barbershopService: BarbershopService,
    private appointmentRepository: AppointmentRepository,
  ) {}

  async createAppointment(data: AppointmentDto): Promise<void> {
    await Promise.all([
      this.barberService.findBarberById(data.barberId),
      this.userService.findById(data.customerId),
      this.barbershopService.findBarbershopById(data.barbershopId),
      this.barbershopService.findBarbershopServiceById(data.serviceId),
    ]);
  }
}

// export interface AppointmentDto {
//   id?: number;
//   customerId: number;
//   barberId: number;
//   dateTime: Date;
//   serviceId: number;
//   barbershopId: number;
// }
