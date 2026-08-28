import { GenreModel } from '@models/genre.model';
import { Injectable } from '@nestjs/common';
import { IGenrePersistencePort } from '@spi/genre.persistence.port';
import { GenreRepository } from '../repository/genre.repository';

@Injectable()
export class GenreAdapter implements IGenrePersistencePort {
  constructor(private readonly genreRepository: GenreRepository) {}

  async getGenres(): Promise<GenreModel[]> {
    return this.genreRepository.getGenres();
  }
}
