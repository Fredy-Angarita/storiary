import { TitleServicePort } from '../title.service.port';
import { ITitlePersistencePort } from '@spi/title.persistence.port';
import { TitleModel } from '@models/title.model';

export class TitleUseCase implements TitleServicePort {
  constructor(private readonly titlePersistencePort: ITitlePersistencePort) {}

  async getTitles(): Promise<TitleModel[]> {
    return await this.titlePersistencePort.getTitles();
  }
}
