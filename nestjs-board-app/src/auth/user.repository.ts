import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import * as bycrypt from 'bcryptjs';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(
        private dataSource: DataSource
    ) {
        super(User, dataSource.createEntityManager());
    }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const salt = await bycrypt.genSalt();
        const hashedPassword = await bycrypt.hash(password, salt);

        const user = this.create({ username, password: hashedPassword });
        
        try {
            await this.save(user);    
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Existing username');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}