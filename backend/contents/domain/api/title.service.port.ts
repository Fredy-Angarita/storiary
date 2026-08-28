import { TitleModel } from '@models/title.model';

export interface TitleServicePort {
  getTitles(): Promise<TitleModel[]>;
  /*   saveTitleType(title: TitleType): Promise<TitleType>;
  updateTitleType(id: string, title_type: Partial<TitleType>): Promise<void>;
  getTitleTypeById(id: string): Promise<TitleType>; */
}
