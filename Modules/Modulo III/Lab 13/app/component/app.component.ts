import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';

const STUDENTS: Student[] = [
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


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
}) 


export class AppComponent {
  title = "School";
  
  studentSelected : Student;
  students: Student[] = STUDENTS;

  teacherSelected : Teacher;
  teachers: Teacher[] = TEACHERS;

  onSelectStudent(student: Student) {
    this.studentSelected = student;
  }

   onSelectTeacher(teacher: Teacher) {
    this.teacherSelected = teacher;
  }

}

