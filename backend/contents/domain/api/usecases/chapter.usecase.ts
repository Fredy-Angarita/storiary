import { IChapterPersistencePort } from '@spi/chapter.persistence.port';
import { ChapterServicePort } from '../chapter.service.port';
import { ChapterModel } from '@models/chapter.model';

export class ChapterUseCase implements ChapterServicePort {
  constructor(
    private readonly chapterPersistencePort: IChapterPersistencePort,
  ) {}
  async getChapters(): Promise<ChapterModel[]> {
    return await this.chapterPersistencePort.getChapters();
  }
}
