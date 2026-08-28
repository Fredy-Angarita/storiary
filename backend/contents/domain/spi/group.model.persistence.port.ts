import { GroupModel } from '@models/group.model';

export interface IGroupPersistencePort {
  getGroup(): Promise<GroupModel[]>;
}
