import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { env } from 'process';

@Module({
  imports: [ConfigModule, ConfigModule.forRoot({ envFilePath: ['.env'] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
