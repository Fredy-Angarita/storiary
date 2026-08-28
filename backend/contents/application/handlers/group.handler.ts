import { Inject } from '@nestjs/common';
import type { GroupServicePort } from '../../domain/api/group.service.port';

export class GroupHandler {
  constructor(
    @Inject('GroupServicePort')
    private readonly groupSP: GroupServicePort,
  ) {}

  async getGroups() {
    return await this.groupSP.getGroups();
  }
}
