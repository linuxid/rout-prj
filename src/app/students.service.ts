import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export interface Student {

  name: string;
  age: number;
  math: number;
  chem: number;
  bio: number;
}

export class StudentsService {

  students: Student[] = [
    {name: 'John Doe', age: 23, math: 3, chem: 4, bio: 3},
    {name: 'Aba Shaima', age: 21, math: 4, chem: 4, bio: 5},
    {name: 'Habib Rasoulzadeh', age: 20, math: 5, chem: 3, bio: 4}
  ];
  getStudents(): Student[]{
    return this.students;
}
  // tslint:disable-next-line:typedef
  addStudent(name: string, age: number, math: number, chem: number, bio: number) {

    this.students.push({name, age, math, chem, bio});
  }
  // tslint:disable-next-line:typedef
  removeStudent(student: Student) {
    // this.students.splice(this.students.indexOf(student), this.students.indexOf(student));
    this.students.splice(this.students.indexOf(student), 1);
  }
  constructor() { }
}
