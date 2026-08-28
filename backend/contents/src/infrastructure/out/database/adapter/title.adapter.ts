import { TitleModel } from '@models/title.model';
import { ITitlePersistencePort } from '@spi/title.persistence.port';
import { TitleRepository } from '../repository/title.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TitleAdapter implements ITitlePersistencePort {
  constructor(private readonly titleRepository: TitleRepository) {}
  async getTitles(): Promise<TitleModel[]> {
    return await this.titleRepository.getTitles();
  }
}
