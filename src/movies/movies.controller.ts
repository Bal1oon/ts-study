import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')   // url의 Entry Point를 컨트롤 함
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("/search") // @Get("/:id") 보다 아래에 있으면 search를 id로 판단하기 때문에 위에 배치
    search(@Query("year") searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete(":id")
    remove(@Param("id") movieId:string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')  // Put은 모든 리소스를 업데이트. patch는 리소스의 일부분만 업데이트
    path(@Param('id') movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData,
        };
    }
}
