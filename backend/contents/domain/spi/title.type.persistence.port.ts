import { TitleType } from '../models/title.type.model';

export interface ITitleTypePersistencePort {
  saveTitleType(titleType: TitleType): Promise<TitleType>;
  updateTitleType(id: string, titleType: Partial<TitleType>): Promise<void>;
  getTitleById(id: string): Promise<TitleType | null>;
}
