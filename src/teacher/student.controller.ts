import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherContoller{
    
    @Get('')
    getStudents() {
        return "Get all students that belong to a teacher"
    }

    @Put('/:studentId')
    updateStudentTeacher() {
         return "Update students Teacher"
    }
}