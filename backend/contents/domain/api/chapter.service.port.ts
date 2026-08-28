import { ChapterModel } from '@models/chapter.model';

export interface ChapterServicePort {
  getChapters(): Promise<ChapterModel[]>;
  /*   saveTitleType(title: TitleType): Promise<TitleType>;
  updateTitleType(id: string, title_type: Partial<TitleType>): Promise<void>;
  getTitleTypeById(id: string): Promise<TitleType>; */
}
