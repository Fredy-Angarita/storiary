import { ChapterModel } from '@models/chapter.model';

export interface IChapterPersistencePort {
  getChapters(): Promise<ChapterModel[]>;
}
