import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";

@EntityRepository(Board)    // 최신 버전 TypeORM에서는 해당 데코레이터가 사용되지 않아 이후에 수정 필요
export class BoardRepository extends Repository<Board> {

}