import { Component, OnInit } from '@angular/core';
import {Student, StudentsService} from '../students.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  students: Student[] = [];
  enabled = false;
  edit = 'Edit';

  name = 'New Student';
  age = 18;
  math = 2;
  chem = 2;
  bio = 2;


  constructor(private studentsService: StudentsService) { }

  getStudents(): void {
    this.students = this.studentsService.getStudents();
  }
  // tslint:disable-next-line:typedef
  removeStudent(stud){
    this.studentsService.removeStudent(stud);
  }
  // tslint:disable-next-line:typedef
  editStudent(stud) {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.edit = 'Add';
    }
    if (!this.enabled) {
      this.studentsService.removeStudent(stud);
      this.studentsService.addStudent(stud.name, stud.age, stud.math, stud.chem, stud.bio);
      this.edit = 'Edit';
    }
    // tslint:disable-next-line:typedef
  }
  // tslint:disable-next-line:typedef
    addStudent() {
      this.studentsService.addStudent(this.name, this.age, this.math, this.chem, this.bio);


  }

  ngOnInit(): void {
    this.getStudents();
  }

}
