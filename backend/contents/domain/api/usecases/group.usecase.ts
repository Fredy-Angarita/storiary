import { GroupServicePort } from '../group.service.port';
import { IGroupPersistencePort } from '@spi/group.model.persistence.port';
import { GroupModel } from '@models/group.model';

export class GroupUseCase implements GroupServicePort {
  constructor(private readonly groupPersistencePort: IGroupPersistencePort) {}

  async getGroups(): Promise<GroupModel[]> {
    return await this.groupPersistencePort.getGroup();
  }
}
