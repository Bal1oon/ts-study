import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreaateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];    // private을 사용하지 않으면 다른 컴포넌트에서 배열값을 수정할 수 있기 때문에 차단하기 위해 private 사용

    getAllBoards(): Board[] {   // return 값의 타입을 정의하기 위해 :Board[] 를 넣어줌
        return this.boards;
    }

    createBoard(createBoardDto: CreaateBoardDto) {
        const { title, description } = createBoardDto;
        const board: Board = {
            id: uuid(),     // 로컬 메모리로 데이터를 저장하고 있어 uuid 임시 사용
            title,          // JS에서는 title: title 처럼 key, value의 이름이 같으면 간소화할 수 있음
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }
}
