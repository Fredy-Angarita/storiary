import { GenreModel } from '@models/genre.model';

export interface IGenrePersistencePort {
  getGenres(): Promise<GenreModel[]>;
}
