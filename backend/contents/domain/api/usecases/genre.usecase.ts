import { IGenrePersistencePort } from '@spi/genre.persistence.port';
import { GenreServicePort } from '../genre.service.port';
import { GenreModel } from '@models/genre.model';

export class GenreUseCase implements GenreServicePort {
  constructor(private readonly genrePersistencePort: IGenrePersistencePort) {}
  async getGenres(): Promise<GenreModel[]> {
    return await this.genrePersistencePort.getGenres();
  }
}
