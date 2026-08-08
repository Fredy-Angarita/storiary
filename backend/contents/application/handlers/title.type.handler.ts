import { Inject, Injectable } from '@nestjs/common';
import type { TitleTypeServicePort } from '../../domain/api/title.type.service.port';
import { TitleTypeResponseDto } from '../dto/response/title.type.response.dto';
import { SaveTitleTypeDto } from '../dto/request/save.title.type.dto';
import { TitleType } from '@models/title.type.model';

@Injectable()
export class TitleTypeHandler {
  constructor(
    @Inject('TitleTypeServicePort')
    private readonly titleTypeSP: TitleTypeServicePort,
  ) {}
  async getTitleTypes(): Promise<TitleTypeResponseDto[]> {
    const types = await this.titleTypeSP.getTitleType();
    return types.map((type) => this.fromModelToDto(type));
  }
  async saveTitleType(
    titleType: SaveTitleTypeDto,
  ): Promise<TitleTypeResponseDto> {
    const result = await this.titleTypeSP.saveTitleType(titleType);
    return this.fromModelToDto(result);
  }

  async updateTitleType(
    uuid: string,
    updateType: Partial<SaveTitleTypeDto>,
  ): Promise<void> {
    await this.titleTypeSP.updateTitleType(uuid, updateType);
  }

  private fromModelToDto(type: TitleType): TitleTypeResponseDto {
    return { ...type } as TitleTypeResponseDto;
  }
}
