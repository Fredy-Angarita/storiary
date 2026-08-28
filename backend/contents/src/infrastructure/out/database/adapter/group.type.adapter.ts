import { GroupTypeModel } from '@models/group.type.model';
import { IGroupTypePersistencePort } from '@spi/group.type.persistence.port';
import { GroupTypeRepository } from '../repository/group.type.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupTypeAdapter implements IGroupTypePersistencePort {
  constructor(private readonly repository: GroupTypeRepository) {}
  async getGroupType(): Promise<GroupTypeModel[]> {
    return await this.repository.getGroupType();
  }
}
