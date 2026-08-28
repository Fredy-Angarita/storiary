import { GenreModel } from '@models/genre.model';

export interface GenreServicePort {
  getGenres(): Promise<GenreModel[]>;
}
