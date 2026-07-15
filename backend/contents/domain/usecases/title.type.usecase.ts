import { TitleType } from '@models/title.type.model';
import { NotFoundException } from '@nestjs/common';
import { ITitleTypePersistencePort } from '@spi/title.type.persistence.port';
import { EXCEPTIONS_CONSTANTS } from '../constants/exception.constants';

export class TitleTypeUseCase {
  constructor(private readonly persistence_port: ITitleTypePersistencePort) {}

  async saveTitleType(title: TitleType): Promise<TitleType> {
    return await this.persistence_port.saveTitleType(title);
  }

  async updateTitleType(
    id: string,
    title_type: Partial<TitleType>,
  ): Promise<void> {
    await this.persistence_port.updateTitleType(id, title_type);
  }

  async getTitleTypeById(id: string): Promise<TitleType> {
    const type = await this.persistence_port.getTitleById(id);
    if (!type)
      throw new NotFoundException(EXCEPTIONS_CONSTANTS.NOT_FOUND_TITLE_TYPE);
    return type;
  }
}
