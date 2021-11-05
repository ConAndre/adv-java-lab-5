import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  findAllCourses = (): Promise<any> => {
    return fetch('http://localhost:8080/api/courses').then(response => response.json())
  }
  constructor() { }

}
