import { Inject, Injectable } from '@nestjs/common';
import type { GenreServicePort } from '../../domain/api/genre.service.port';

@Injectable()
export class GenreHandler {
  constructor(
    @Inject('GenreServicePort')
    private readonly genreSp: GenreServicePort,
  ) {}

  async getGenres() {
    return await this.genreSp.getGenres();
  }
}
