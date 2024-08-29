import { JwtModuleOptions } from "@nestjs/jwt";
import * as config from 'config';

const _jwtConfig = config.get('jwt');

export const jwtConfig: JwtModuleOptions = {
    secret: process.env.JWT_SECRET || _jwtConfig.secret,   // Secret Text
    signOptions: {
        expiresIn: _jwtConfig.expiresIn,
    }
}