import { IGroupTypePersistencePort } from '@spi/group.type.persistence.port';
import { GroupTypeServicePort } from '../group.type.service.port';
import { GroupTypeModel } from '@models/group.type.model';

export class GroupTypeUseCase implements GroupTypeServicePort {
  constructor(
    private readonly groupTypePersistencePort: IGroupTypePersistencePort,
  ) {}
  getGroupsType(): Promise<GroupTypeModel[]> {
    return this.groupTypePersistencePort.getGroupType();
  }
}
