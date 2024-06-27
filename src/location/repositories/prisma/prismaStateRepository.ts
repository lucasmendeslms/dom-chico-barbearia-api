import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';
import { StateRepository } from '../stateRepository';
import { State } from 'src/location/entities/state.entity';

@Injectable()
export class PrismaStateRepository implements StateRepository {
  constructor(private prisma: PrismaService) {}

  async createState(stateData: State): Promise<number> {
    const { name, stateAcronym } = stateData;

    const newState = await this.prisma.estado.create({
      data: {
        nome: name,
        sigla: stateAcronym,
      },
    });

    return newState.id;
  }
}
