import { TitleType } from '@models/title.type.model';
import { ITitleTypePersistencePort } from '@spi/title.type.persistence.port';
import { TitleTypeRepository } from '../repository/title.type.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class TitleTypeAdapter implements ITitleTypePersistencePort {
  constructor(private readonly repository: TitleTypeRepository) {}
  async saveTitleType(titleType: TitleType): Promise<TitleType> {
    return await this.repository.saveTitleType(titleType);
  }
  async updateTitleType(
    id: string,
    titleType: Partial<TitleType>,
  ): Promise<void> {
    return await this.repository.updateTitleType(id, titleType);
  }
  getTitleById(id: string): Promise<TitleType | null> {
    const result = this.repository.getTitleById(id);
    return result;
  }
}
