import { PrismaService } from 'src/database/prisma.service';
import { AppointmentRepository } from '../appointmentRepository';
import { Injectable } from '@nestjs/common';
import { AppointmentDto } from 'src/appointment/dto/appointment.dto';

@Injectable()
export class PrismaAppointmentRepository implements AppointmentRepository {
  constructor(private prisma: PrismaService) {}

  async createAppointment(data: AppointmentDto): Promise<void> {
    const { barberId, barbershopId, customerId, dateTime, serviceId } = data;

    const appointment = await this.prisma.barbershopAppointments.create({
      data: {
        customerId,
        barberId,
        barbershopId,
        dateTime,
      },
    });

    await this.prisma.scheduledService.create({
      data: {
        appointmentId: appointment.id,
        serviceId,
      },
    });
  }
}
