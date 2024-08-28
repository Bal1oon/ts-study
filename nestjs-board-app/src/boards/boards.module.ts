import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature([BoardRepository])
    TypeOrmModule.forFeature([Board]) // @EntityRepository 데코레이터 deprecated로 인해 변경
  ],
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository] // @EntityRepository 데코레이터 deprecated로 인해 변경 - repo를 provider로 가짐
})
export class BoardsModule {}
