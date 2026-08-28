import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupTypeEntity } from '../entity/group.type.entity';

@Injectable()
export class GroupTypeRepository {
  constructor(
    @InjectRepository(GroupTypeEntity)
    private readonly repository: Repository<GroupTypeEntity>,
  ) {}

  async getGroupType(): Promise<GroupTypeEntity[]> {
    return await this.repository.find();
  }

  async saveGroupType(genre: GroupTypeEntity): Promise<GroupTypeEntity> {
    return await this.repository.save(genre);
  }

  async getGroupTypeById(id: string): Promise<GroupTypeEntity | null> {
    return await this.repository.findOneBy({ id: id });
  }
}
