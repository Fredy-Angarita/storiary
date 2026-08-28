import { GroupTypeModel } from './group.type.model';
import { TitleModel } from './title.model';

export interface GroupModel {
  id?: string;
  group_name: string;
  description: string;
  order: number;
  total_chapters: number;
  title: TitleModel;
  type: GroupTypeModel;
  create_at?: Date;
  delete_at?: Date;
}
