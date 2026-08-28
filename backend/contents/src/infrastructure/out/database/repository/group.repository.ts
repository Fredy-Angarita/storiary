import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity } from '../entity/group.entity';

@Injectable()
export class GroupRepository {
  constructor(
    @InjectRepository(GroupEntity)
    private readonly repository: Repository<GroupEntity>,
  ) {}

  async getGroup(): Promise<GroupEntity[]> {
    return await this.repository.find();
  }

  async saveGroup(genre: GroupEntity): Promise<GroupEntity> {
    return await this.repository.save(genre);
  }

  async getGroupById(id: string): Promise<GroupEntity | null> {
    return await this.repository.findOneBy({ id: id });
  }
}
