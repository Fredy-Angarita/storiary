import { TitleModel } from '@models/title.model';

export interface ITitlePersistencePort {
  getTitles(): Promise<TitleModel[]>;
}
