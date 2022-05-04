import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherContoller{
    
    @Get()
    getTeachers() {
        return "Show all teachers"
    }

    @Get('/:teacherId')
    getTeacherById() {
        return "Get teacher by id"
    }
}