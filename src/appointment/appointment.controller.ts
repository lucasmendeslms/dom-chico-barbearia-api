import { Body, Controller, Post } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentDto } from './dto/appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  createAppointment(@Body() appointmentData: AppointmentDto): Promise<void> {
    return this.appointmentService.createAppointment(appointmentData);
  }
}
