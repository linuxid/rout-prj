import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  subj = ['Math', 'Chemistry', 'Biology'];

  constructor() { }
  // tslint:disable-next-line:typedef
  getSubjects() {
    return this.subj;
  }
}
