import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/out/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TitleTypeController } from './infrastructure/in/http/controllers/title.type.controller';
import { TitleTypeHandler } from '../application/handlers/title.type.handler';
import { TitleTypeRepository } from './infrastructure/out/database/repository/title.type.repository';
import { TitleTypeAdapter } from './infrastructure/out/database/adapter/title.type.adapter';
import { TitleTypeUseCase } from '../domain/api/usecases/title.type.usecase';
import { ITitleTypePersistencePort } from '@spi/title.type.persistence.port';
import { GenreController } from './infrastructure/in/http/controllers/genre.controller';
import { GenreAdapter } from './infrastructure/out/database/adapter/genre.adapter';
import { GenreRepository } from './infrastructure/out/database/repository/genre.repository';
import { GenreUseCase } from '../domain/api/usecases/genre.usecase';
import { IGenrePersistencePort } from '@spi/genre.persistence.port';
import { GenreHandler } from '@handler/genre.handler';
import { ChapterController } from './infrastructure/in/http/controllers/chapters.controller';
import { GroupController } from './infrastructure/in/http/controllers/group.controller';
import { GroupTypeController } from './infrastructure/in/http/controllers/group.type.controller';
import { TitleController } from './infrastructure/in/http/controllers/title.controller';
import { ChapterHandler } from '@handler/chapter.handler';
import { ChapterRepository } from './infrastructure/out/database/repository/chapter.repository';
import { ChapterAdapter } from './infrastructure/out/database/adapter/chapter.adapter';
import { ChapterUseCase } from '../domain/api/usecases/chapter.usecase';
import { IChapterPersistencePort } from '@spi/chapter.persistence.port';
import { GroupHandler } from '@handler/group.handler';
import { GroupRepository } from './infrastructure/out/database/repository/group.repository';
import { GroupAdapter } from './infrastructure/out/database/adapter/group.adapter';
import { IGroupPersistencePort } from '@spi/group.model.persistence.port';
import { GroupUseCase } from '../domain/api/usecases/group.usecase';
import { GroupTypeHandler } from '@handler/group.type.handler';
import { GroupTypeRepository } from './infrastructure/out/database/repository/group.type.repository';
import { GroupTypeAdapter } from './infrastructure/out/database/adapter/group.type.adapter';
import { IGroupTypePersistencePort } from '@spi/group.type.persistence.port';
import { GroupTypeUseCase } from '../domain/api/usecases/group.type.usecase';
import { TitleHandler } from '@handler/title.handler';
import { TitleRepository } from './infrastructure/out/database/repository/title.repository';
import { TitleAdapter } from './infrastructure/out/database/adapter/title.adapter';
import { TitleUseCase } from '../domain/api/usecases/title.usecase';
import { ITitlePersistencePort } from '@spi/title.persistence.port';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [
    TitleTypeController,
    GenreController,
    ChapterController,
    GroupController,
    GroupTypeController,
    TitleController,
  ],
  providers: [
    TitleTypeHandler,
    TitleTypeRepository,
    {
      provide: 'ITitleTypePersistencePort',
      useFactory: (titleTypeRepository: TitleTypeRepository) =>
        new TitleTypeAdapter(titleTypeRepository),
      inject: [TitleTypeRepository],
    },
    {
      provide: 'TitleTypeServicePort',
      useFactory: (titleTypePersistencePort: ITitleTypePersistencePort) =>
        new TitleTypeUseCase(titleTypePersistencePort),
      inject: ['ITitleTypePersistencePort'],
    },
    GenreHandler,
    GenreRepository,
    {
      provide: 'IGenrePersistencePort',
      useFactory: (genreRepository: GenreRepository) =>
        new GenreAdapter(genreRepository),
      inject: [GenreRepository],
    },
    {
      provide: 'GenreServicePort',
      useFactory: (genrePersistencePort: IGenrePersistencePort) =>
        new GenreUseCase(genrePersistencePort),
      inject: ['IGenrePersistencePort'],
    },
    ChapterHandler,
    ChapterRepository,
    {
      provide: 'IChapterPersistencePort',
      useFactory: (chapterRepository: ChapterRepository) =>
        new ChapterAdapter(chapterRepository),
      inject: [ChapterRepository],
    },
    {
      provide: 'ChapterServicePort',
      useFactory: (chapterPersistencePort: IChapterPersistencePort) =>
        new ChapterUseCase(chapterPersistencePort),
      inject: ['IChapterPersistencePort'],
    },
    GroupTypeHandler,
    GroupTypeRepository,
    {
      provide: 'IGroupTypePersistencePort',
      useFactory: (groupTypeRepository: GroupTypeRepository) =>
        new GroupTypeAdapter(groupTypeRepository),
      inject: [GroupTypeRepository],
    },
    {
      provide: 'GroupTypeServicePort',
      useFactory: (groupTypePersistencePort: IGroupTypePersistencePort) =>
        new GroupTypeUseCase(groupTypePersistencePort),
      inject: ['IGroupTypePersistencePort'],
    },
    GroupHandler,
    GroupRepository,
    {
      provide: 'IGroupPersistencePort',
      useFactory: (groupRepository: GroupRepository) =>
        new GroupAdapter(groupRepository),
      inject: [GroupRepository],
    },
    {
      provide: 'GroupServicePort',
      useFactory: (groupPersistencePort: IGroupPersistencePort) =>
        new GroupUseCase(groupPersistencePort),
      inject: ['IGroupPersistencePort'],
    },
    TitleHandler,
    TitleRepository,
    {
      provide: 'ITitlePersistencePort',
      useFactory: (titleRepository: TitleRepository) =>
        new TitleAdapter(titleRepository),
      inject: [TitleRepository],
    },
    {
      provide: 'TitleServicePort',
      useFactory: (titlePersistencePort: ITitlePersistencePort) =>
        new TitleUseCase(titlePersistencePort),
      inject: ['ITitlePersistencePort'],
    },
  ],
  exports: [],
})
export class AppModule {}
