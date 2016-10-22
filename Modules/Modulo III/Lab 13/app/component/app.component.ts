import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

import { Teacher } from '../model/teacher';
import { TeacherService } from '../service/teacher.service';

/*const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Alice",
        classess: ["Mathematics","Chemistry"],
        grade: 9.5
    },
    {
        id: 2,
        name: "Candance",
        classess: ["Sciences","Language"],
        grade: 8.0
    },
    {
        id: 3,
        name: "Lucy",
        classess: ["Sports","Mathematics"],
        grade: 7.5
    }
];

const TEACHERS: Teacher[] = [
    {
        id: 1,
        name: "Ms. Rodriguez",
        rooms: ["1A", "2C"],
        studies: ["Phd"]
    },
    {
        id: 2,
        name: "Ms. Perez",
        rooms: ["1A"],
        studies: ["Phd"]
    },
    {
        id: 3,
        name: "Ms. Durango",
        rooms: ["2B","3A"],
        studies: ["Phd"]
    }
];
*/

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html',
  providers: [StudentService, TeacherService]
}) 


export class AppComponent implements OnInit {
  constructor (
      private studentService: StudentService, 
      private teacherService: TeacherService
  ) {}

  title = "School";
   
  studentSelected : Student;
  //students: Student[] = STUDENTS;
  students: Student[];

  teacherSelected : Teacher;
  //teachers: Teacher[] = TEACHERS;
  teachers: Teacher[];
  

  ngOnInit() {
        this.studentService.getStudents()
        .then(students => this.students = students)
        .catch(error => console.log(error)); 

        this.teacherService.getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => console.log(error)); 
    }

  onSelectStudent(student: Student) {
    this.studentSelected = student;
  }

   onSelectTeacher(teacher: Teacher) {
    this.teacherSelected = teacher;
  }

}

