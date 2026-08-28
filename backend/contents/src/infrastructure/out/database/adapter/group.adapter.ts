import { IGroupPersistencePort } from '@spi/group.model.persistence.port';
import { GroupRepository } from '../repository/group.repository';
import { GroupModel } from '@models/group.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupAdapter implements IGroupPersistencePort {
  constructor(private readonly repository: GroupRepository) {}
  async getGroup(): Promise<GroupModel[]> {
    return await this.repository.getGroup();
  }
}
