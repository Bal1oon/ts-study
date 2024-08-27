import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // app.module은 AppController와 AppService만 가짐
  providers: [],
})
export class AppModule {}
