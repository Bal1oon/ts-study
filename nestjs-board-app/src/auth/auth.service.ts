import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import * as bycrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async singUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { username, password } = authCredentialsDto;
        const user = await this.userRepository.findOne({ where: { username } });

        if (user && (await bycrypt.compare(password, user.password))) {
            return 'login success';
        } else {
            throw new UnauthorizedException('login failed')
        }
    }
}
