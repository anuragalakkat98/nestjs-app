import { Module } from '@nestjs/common';
import {StudentController} from "../student/student.controller"
import {TeacherContoller} from "../teacher/teacher.controller"
import {StudentTeacherContoller} from '../teacher/student.controller'

@Module({
  imports: [],
  controllers: [StudentController, TeacherContoller, StudentTeacherContoller]
})
export class AppModule {}
