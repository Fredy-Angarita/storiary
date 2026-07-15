import { TitleType } from '@models/title.type.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TitleTypeEntity } from '../entity/title.type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TitleTypeRepository {
  constructor(
    @InjectRepository(TitleTypeEntity)
    private readonly repository: Repository<TitleTypeEntity>,
  ) {}

  async getTitleTypes(): Promise<TitleTypeEntity[]> {
    return await this.repository.find();
  }

  async saveTitleType(titleType: TitleType): Promise<TitleTypeEntity> {
    return await this.repository.save(titleType);
  }

  async updateTitleType(
    id: string,
    titleType: Partial<TitleType>,
  ): Promise<void> {
    await this.repository.update(id, titleType);
  }

  async getTitleById(id: string): Promise<TitleType | null> {
    return await this.repository.findOneBy({ id: id });
  }
}
