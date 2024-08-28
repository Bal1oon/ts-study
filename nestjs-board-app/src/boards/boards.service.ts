import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreaateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    // getAllBoards(): Board[] {   // return 값의 타입을 정의하기 위해 :Board[] 를 넣어줌
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreaateBoardDto) {
    //     const { title, description } = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),     // 로컬 메모리로 데이터를 저장하고 있어 uuid 임시 사용
    //         title,          // JS에서는 title: title 처럼 key, value의 이름이 같으면 간소화할 수 있음
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

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
