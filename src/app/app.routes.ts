import { Routes } from '@angular/router';
import { AssignmentList } from './assignment-list/assignment-list';
import { CourseList } from './course-list/course-list';
import { GradeCalculator } from './grade-calculator/grade-calculator';
import { AddCourse } from './add-course/add-course';

export const routes: Routes = [
    { path: '', component: AssignmentList },
    { path: 'courses', component: CourseList },
    { path: 'gradeCalculator', component: GradeCalculator },
    { path: 'addCourse', component: AddCourse },
];
