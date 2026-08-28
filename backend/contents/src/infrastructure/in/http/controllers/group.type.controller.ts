import { GroupTypeHandler } from '@handler/group.type.handler';
import { Controller, Get } from '@nestjs/common';

@Controller('group-type')
export class GroupTypeController {
  constructor(private readonly groupTypeHandler: GroupTypeHandler) {}
  @Get()
  async getGroupsTypes() {
    return await this.groupTypeHandler.getGroupsType();
  }
}
