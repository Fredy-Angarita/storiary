import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/out/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
