import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/out/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TitleTypeController } from './infrastructure/in/http/controllers/title.type.controller';
import { TitleTypeHandler } from '../application/handlers/title.type.handler';
import { TitleTypeRepository } from './infrastructure/out/database/repository/title.type.repository';
import { TitleTypeAdapter } from './infrastructure/out/database/adapter/title.type.adapter';
import { TitleTypeUseCase } from '../domain/api/usecases/title.type.usecase';
import { ITitleTypePersistencePort } from '@spi/title.type.persistence.port';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [TitleTypeController],
  providers: [
    TitleTypeHandler,
    TitleTypeRepository,
    {
      provide: 'ITitleTypePersistencePort',
      useFactory: (titleTypePersistencePort: TitleTypeRepository) =>
        new TitleTypeAdapter(titleTypePersistencePort),
      inject: [TitleTypeRepository],
    },
    {
      provide: 'TitleTypeServicePort',
      useFactory: (titleTypePersistencePort: ITitleTypePersistencePort) =>
        new TitleTypeUseCase(titleTypePersistencePort),
      inject: ['ITitleTypePersistencePort'],
    },
  ],
  exports: [],
})
export class AppModule {}
