import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService: CourseServiceService) { }
  courses: any;
  selectedCourse: any = {
    modules: [],
  }
  ngOnInit(): void {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }


  selectCourse(course: any) {
    this.selectedCourse = course;
    console.log(this.selectedCourse)
  }

}
