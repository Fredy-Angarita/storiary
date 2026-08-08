import { TitleType } from '@models/title.type.model';
import { ITitleTypePersistencePort } from '@spi/title.type.persistence.port';
import { EXCEPTIONS_CONSTANTS } from '../../constants/exception.constants';
import { TitleTypeNotFoundException } from '../../exceptions/title.type.not.found.exceptions';
import { TitleTypeServicePort } from '../title.type.service.port';

export class TitleTypeUseCase implements TitleTypeServicePort {
  constructor(private readonly persistence_port: ITitleTypePersistencePort) {}
  async getTitleType(): Promise<TitleType[]> {
    return await this.persistence_port.getTitleTypes();
  }

  async saveTitleType(title: TitleType): Promise<TitleType> {
    return await this.persistence_port.saveTitleType(title);
  }

  async updateTitleType(
    id: string,
    title_type: Partial<TitleType>,
  ): Promise<void> {
    const foundTitle = await this.getTitleTypeById(id);
    if (!foundTitle) return;
    await this.persistence_port.updateTitleType(id, title_type);
  }

  async getTitleTypeById(id: string): Promise<TitleType> {
    const type = await this.persistence_port.getTitleById(id);
    if (!type)
      throw new TitleTypeNotFoundException(
        EXCEPTIONS_CONSTANTS.NOT_FOUND_TITLE_TYPE,
      );
    return type;
  }
}
