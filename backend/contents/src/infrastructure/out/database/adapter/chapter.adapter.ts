import { IChapterPersistencePort } from '@spi/chapter.persistence.port';
import { ChapterRepository } from '../repository/chapter.repository';
import { ChapterModel } from '@models/chapter.model';

export class ChapterAdapter implements IChapterPersistencePort {
  constructor(private readonly repository: ChapterRepository) {}
  async getChapters(): Promise<ChapterModel[]> {
    return await this.repository.getChapters();
  }
}
