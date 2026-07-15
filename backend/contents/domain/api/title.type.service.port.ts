import { TitleType } from '@models/title.type.model';

export interface TitleTypeServicePort {
  getTitleType(): Promise<TitleType[]>;
  saveTitleType(title: TitleType): Promise<TitleType>;
  updateTitleType(id: string, title_type: Partial<TitleType>): Promise<void>;
  getTitleTypeById(id: string): Promise<TitleType>;
}
