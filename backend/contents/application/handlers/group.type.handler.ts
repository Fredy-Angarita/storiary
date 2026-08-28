import { Inject } from '@nestjs/common';
import type { GroupTypeServicePort } from '../../domain/api/group.type.service.port';

export class GroupTypeHandler {
  constructor(
    @Inject('GroupTypeServicePort')
    private readonly groupTypeSP: GroupTypeServicePort,
  ) {}
  async getGroupsType() {
    return await this.groupTypeSP.getGroupsType();
  }
}
