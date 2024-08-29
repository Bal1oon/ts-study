import { Injectable } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
    constructor(
        private readonly boardRepository: BoardRepository
    ) {}

    getAllBoards(): Promise<Board[]> {
        return this.boardRepository.getAllBoards();
    }

    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto, user);    
    }

    getBoardById(id: number): Promise<Board> {
        return this.boardRepository.getBoardById(id);
    }

    deleteBoard(id: number): Promise<void> {
        return this.boardRepository.deleteBoard(id);
    }

    updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
        return this.boardRepository.updateBoardStatus(id, status);
    }

    // updateBoardTitle(id: number, title: string): Promise<Board> {
    //     return this.boardRepository.updateBoardTitle(id, title);
    // }
    
    // updateBoardDescription(id: number, description: string): Promise<Board> {
    //     return this.boardRepository.updateBoardDescription(id, description);
    // }
}
