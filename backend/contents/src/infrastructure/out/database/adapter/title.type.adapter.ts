import { TitleType } from '@models/title.type.model';
import { ITitleTypePersistencePort } from '@spi/title.type.persistence.port';
import { TitleTypeRepository } from '../repository/title.type.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class TitleTypeAdapter implements ITitleTypePersistencePort {
  constructor(private readonly repository: TitleTypeRepository) {}

  async getTitleTypes(): Promise<TitleType[]> {
    return await this.repository.getTitleTypes();
  }

  async saveTitleType(titleType: TitleType): Promise<TitleType> {
    return await this.repository.saveTitleType(titleType);
  }

  async updateTitleType(
    id: string,
    titleType: Partial<TitleType>,
  ): Promise<void> {
    return await this.repository.updateTitleType(id, titleType);
  }

  async getTitleById(id: string): Promise<TitleType | null> {
    const result = await this.repository.getTitleById(id);
    return result;
  }
}
