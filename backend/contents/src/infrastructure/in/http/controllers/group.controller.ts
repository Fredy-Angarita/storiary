import { GroupHandler } from '@handler/group.handler';
import { Controller, Get } from '@nestjs/common';

@Controller('group')
export class GroupController {
  constructor(private readonly groupHandler: GroupHandler) {}
  @Get()
  async getGroups() {
    return await this.groupHandler.getGroups();
  }
}
