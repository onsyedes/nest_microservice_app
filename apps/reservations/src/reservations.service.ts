import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsReposotory: ReservationsRepository,
  ) {}
  create(createReservationDto: CreateReservationDto, userId: string) {
    return this.reservationsReposotory.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId,
    });
  }

  findAll() {
    return this.reservationsReposotory.find({});
  }

  findOne(_id: string) {
    return this.reservationsReposotory.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsReposotory.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: string) {
    return this.reservationsReposotory.findOneAndDelete({ _id });
  }
}
