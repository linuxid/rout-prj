import { Component, OnInit } from '@angular/core';
import {Student, StudentsService} from '../students.service';
import {SubjectsService} from '../subjects.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  students: Student[] = [];
  subj = [];
  constructor (private studentsService: StudentsService, private subjectsServise: SubjectsService) { }


  getSubjects(): void {
    this.subj = this.subjectsServise.getSubjects();
  }
  getStudents(): void {
    this.students = this.studentsService.getStudents();
  }

  ngOnInit(): void {
    this.getStudents();
    this.getSubjects();
  }

}
