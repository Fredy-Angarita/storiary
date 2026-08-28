import { GroupModel } from './group.model';

export interface ChapterModel {
  id?: string;
  chapter_name: string;
  relative_number: number;
  order: number;
  group: GroupModel;
  create_at?: Date;
  delete_at?: Date;
}
