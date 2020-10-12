import { Component, OnInit } from '@angular/core';
// import {Student, StudentsService} from '../students.service';
import {SubjectsService} from '../subjects.service';
import {Student, StudentsService} from '../students.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  subj = [];
  students: Student[] = [];
  textColor: string;


  constructor (private studentsService: StudentsService, private subjectsServise: SubjectsService) { }

    getSubjects() {
    this.subj = this.subjectsServise.getSubjects();
    }
  getStudents(): void {
    this.students = this.studentsService.getStudents();
  }
// tslint:disable-next-line:prefer-const one-variable-per-declaration
// @ts-ignore
  // tslint:disable-next-line:prefer-const one-variable-per-declaration


  ngOnInit(): void {
    this.getSubjects();
    this.getStudents();
  }

}
