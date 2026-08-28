import { GroupTypeModel } from '@models/group.type.model';

export interface IGroupTypePersistencePort {
  getGroupType(): Promise<GroupTypeModel[]>;
}
