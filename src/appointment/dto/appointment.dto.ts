export interface AppointmentDto {
  id?: number;
  customerId: number;
  barberId: number;
  dateTime: Date;
  serviceId: number;
  barbershopId: number;
}
