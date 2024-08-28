import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatus } from "./board-status.enum";

@Injectable()
export class BoardRepository extends Repository<Board> {
    constructor(
        private dataSource: DataSource) {
            super(Board, dataSource.createEntityManager());
        }

    async getAllBoards(): Promise<Board[]> {
        return this.find();
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

    async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
        const board = await this.getBoardById(id);

        board.status = status;
        await this.save(board);

        return board
    }

    // async updateBoardTitle(id: number, title: string): Promise<Board> {
    //     const board = await this.getBoardById(id);

    //     board.title = title;
    //     await this.save(board);

    //     return board;
    // }

    // async updateBoardDescription(id: number, description: string): Promise<Board> {
    //     const board = await this.getBoardById(id);

    //     board.description = description;
    //     await this.save(board);

    //     return board;
    // }
}