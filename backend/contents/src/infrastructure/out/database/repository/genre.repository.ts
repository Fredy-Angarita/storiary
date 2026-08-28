import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenreEntity } from '../entity/genre.entity';

@Injectable()
export class GenreRepository {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly repository: Repository<GenreEntity>,
  ) {}

  async getGenres(): Promise<GenreEntity[]> {
    return await this.repository.find();
  }

  async saveGenre(genre: GenreEntity): Promise<GenreEntity> {
    return await this.repository.save(genre);
  }

  async getGenreById(id: string): Promise<GenreEntity | null> {
    return await this.repository.findOneBy({ id: id });
  }
}
