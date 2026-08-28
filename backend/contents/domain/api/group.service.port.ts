import { GroupModel } from '@models/group.model';

export interface GroupServicePort {
  getGroups(): Promise<GroupModel[]>;
  /*   saveTitleType(title: TitleType): Promise<TitleType>;
  updateTitleType(id: string, title_type: Partial<TitleType>): Promise<void>;
  getTitleTypeById(id: string): Promise<TitleType>; */
}
