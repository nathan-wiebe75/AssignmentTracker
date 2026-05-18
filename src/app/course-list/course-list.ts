import { Component, input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses = input.required<Course[]>();
}
