import { Inject } from '@nestjs/common';
import type { TitleServicePort } from '../../domain/api/title.service.port';

export class TitleHandler {
  constructor(
    @Inject('TitleServicePort')
    private readonly titleSP: TitleServicePort,
  ) {}

  async getTitles() {
    return await this.titleSP.getTitles();
  }
}
