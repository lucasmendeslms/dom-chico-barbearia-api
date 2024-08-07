import { AppointmentDto } from '../dto/appointment.dto';

export abstract class AppointmentRepository {
  abstract createAppointment(data: AppointmentDto): Promise<void>;
}
