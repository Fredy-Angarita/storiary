import { GenreHandler } from '@handler/genre.handler';
import { Controller, Get } from '@nestjs/common';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreHandler: GenreHandler) {}
  @Get()
  async getGenres() {
    return await this.genreHandler.getGenres();
  }
}
