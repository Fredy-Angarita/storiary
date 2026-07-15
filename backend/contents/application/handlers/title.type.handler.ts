import { Inject, Injectable } from '@nestjs/common';
import type { TitleTypeServicePort } from '../../domain/api/title.type.service.port';

@Injectable()
export class TitleTypeHandler {
  constructor(
    @Inject('TitleTypeServicePort')
    private readonly titleTypeSP: TitleTypeServicePort,
  ) {}
  async getTitleTypes() {
    return await this.titleTypeSP.getTitleType();
  }
}
