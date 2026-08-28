import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TitleEntity } from '../entity/title.entity';

@Injectable()
export class TitleRepository {
  constructor(
    @InjectRepository(TitleEntity)
    private readonly repository: Repository<TitleEntity>,
  ) {}

  async getTitles(): Promise<TitleEntity[]> {
    return await this.repository.find();
  }

  async saveTitle(genre: TitleEntity): Promise<TitleEntity> {
    return await this.repository.save(genre);
  }

  async getTitleById(id: string): Promise<TitleEntity | null> {
    return await this.repository.findOneBy({ id: id });
  }
}
