import { JwtModuleOptions } from "@nestjs/jwt";

export const jwtConfig: JwtModuleOptions = {
    secret: 'Secret1234',   // Secret Text
    signOptions: {
        expiresIn: 60 * 60,
    }
}