import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
    constructor(
        private readonly boardRepository: BoardRepository
    ) {}

    // @EntityRepository 데코레이터가 작동했던 구 버전
    // constructor(
    //     @InjectRepository(BoardRepository)
    //     private boardRepository: BoardRepository,
    // ) {}

    // Custom Repository를 사용하지 않는 버전
    // constructor(
    //     @InjectRepository(Board)
    //     private boardRepository: Repository<Board>,
    // ) {}

    // getAllBoards(): Board[] {   // return 값의 타입을 정의하기 위해 :Board[] 를 넣어줌
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),     // 로컬 메모리로 데이터를 저장하고 있어 uuid 임시 사용
    //         title,          // JS에서는 title: title 처럼 key, value의 이름이 같으면 간소화할 수 있음
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto);    
    }

    //     this.boards.push(board);
    //     return board
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);

    //     if (!found) {
    //         throw new NotFoundException(`Can't find Board with id ${id}`);
    //     }

    //     return found;
    // }

    getBoardById(id: number): Promise<Board> {
        const found = this.boardRepository.findById(id); // 또는 findOneBy({ id })

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
