import { GroupTypeModel } from '@models/group.type.model';

export interface GroupTypeServicePort {
  getGroupsType(): Promise<GroupTypeModel[]>;
  /*   saveTitleType(title: TitleType): Promise<TitleType>;
  updateTitleType(id: string, title_type: Partial<TitleType>): Promise<void>;
  getTitleTypeById(id: string): Promise<TitleType>; */
}
