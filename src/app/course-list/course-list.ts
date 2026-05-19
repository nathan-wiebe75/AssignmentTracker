import { Component, input } from '@angular/core';
import { Course } from '../course';
import { CourseItem } from '../course-item/course-item';

@Component({
  selector: 'app-course-list',
  imports: [CourseItem],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses = input.required<Course[]>();
}
