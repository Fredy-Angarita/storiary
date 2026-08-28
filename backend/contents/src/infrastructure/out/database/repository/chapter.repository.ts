import { InjectRepository } from '@nestjs/typeorm';
import { ChapterEntity } from '../entity/chapter.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChapterRepository {
  constructor(
    @InjectRepository(ChapterEntity)
    private readonly repository: Repository<ChapterEntity>,
  ) {}

  async getChapters(): Promise<ChapterEntity[]> {
    return await this.repository.find();
  }

  async saveChapter(genre: ChapterEntity): Promise<ChapterEntity> {
    return await this.repository.save(genre);
  }

  async getChapterById(id: string): Promise<ChapterEntity | null> {
    return await this.repository.findOneBy({ id: id });
  }
}
