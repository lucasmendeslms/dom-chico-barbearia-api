import { PrismaService } from 'src/database/prisma.service';
import { BarberRepository } from '../barberRepository';
import { Injectable } from '@nestjs/common';
import { Barber } from 'src/barber/entities/barber.entity';

@Injectable()
export class PrismaBarberRepository implements BarberRepository {
  constructor(private prisma: PrismaService) {}

  async findBarbersByService(
    barbershopId: number,
    serviceId: number,
  ): Promise<Barber[]> {
    const result = await this.prisma.barber.findMany({
      where: {
        barbershopId,
        servicesProvided: {
          some: {
            serviceId,
          },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            picture: true,
          },
        },
      },
    });

    const barbers = result.map((result) => {
      const { user } = result;
      return user;
    });

    return barbers;
  }

  async findBarberById(id: number): Promise<Barber> {
    const barber = await this.prisma.barber.findUnique({
      where: {
        userId: id,
      },
      select: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            picture: true,
          },
        },
      },
    });

    const { user } = barber;

    return user;
  }
}
