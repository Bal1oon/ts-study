import { IsNotEmpty } from "class-validator";

export class CreaateBoardDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}