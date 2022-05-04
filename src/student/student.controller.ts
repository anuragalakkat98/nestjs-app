import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return "Show all students"
    }

    @Get('/:studentId')
    getStudentByID() {
        return "student by id"
    }

    @Post()
    createStudent() {
        return "create a student"
    }

    @Put('/:studentId')
    updateStudent() {
        return "update a student"
    }
}