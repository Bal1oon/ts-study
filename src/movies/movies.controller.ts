import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')   // url의 Entry Point를 컨트롤 함
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") movieId:string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')  // Put은 모든 리소스를 업데이트. patch는 리소스의 일부분만 업데이트
    patch(@Param('id') movieId: string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData)
    }
}
