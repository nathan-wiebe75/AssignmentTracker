import { Component, input, inject } from '@angular/core';
import { Course } from '../course';
import { CourseItem } from '../course-item/course-item';
import { CourseService } from '../course-service';

@Component({
  selector: 'app-course-list',
  imports: [CourseItem],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courseService = inject(CourseService);

  courses = this.courseService.courses;

  deleteCourse(id: number){
    this.courseService.deleteCourse(id);
  }

}
