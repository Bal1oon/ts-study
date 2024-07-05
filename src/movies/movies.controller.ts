import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')   // url의 Entry Point를 컨트롤 함
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete(":id")
    remove(@Param("id") movieId:string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')  // Put은 모든 리소스를 업데이트. patch는 리소스의 일부분만 업데이트
    path(@Param('id') movieId: string) {
        return `This will patch a movie with the id: ${movieId}`;
    }
}
