import { DataSource, EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatus } from "./board-status.enum";

// @EntityRepository(Board)    // 최신 버전 TypeORM에서는 해당 데코레이터가 사용되지 않아 이후에 수정 필요
// export class BoardRepository extends Repository<Board> {

// }
@Injectable()
export class BoardRepository extends Repository<Board> {
    constructor(
        private dataSource: DataSource) {
            super(Board, dataSource.createEntityManager());
        }

    async getBoardById(id: number): Promise<Board> {
        const found = await this.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const { title, description } = createBoardDto;

        const board = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        })

        await this.save(board);

        return board;
    }

    async deleteBoard(id: number): Promise<void> {
        const result = await this.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
    }
}