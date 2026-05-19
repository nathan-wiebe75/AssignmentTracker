import { Injectable, signal } from '@angular/core';
import { Course } from './course';

//id, courseNumber, title, instructor, grade
const initialCourses: Course[] = [
  {id: 0, courseNumber: "CSCI 313", title: "Software Development with Frameworks", instructor: "Pratap Kotala", grade: "B"},
  {id: 1, courseNumber: "CSCI 371", title: "Web Scripting Languages", instructor: "Oksana Myronovych", grade: "A"},
  {id: 2, courseNumber: "CSCI 426", title: "Intro to Artificial Intelligence", instructor: "Simone Ludwig", grade: "B"},
]

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses = signal<Course[]>(initialCourses);

  getCourses(){return this.courses;}

  getCourse(id: number): Course | undefined{
    return this.courses().find(t => t.id === id);
  }

  addCourse(newCourse: Course): void{
    this.courses.update(courses => [...courses,newCourse]);
  }

  updateCourseNumber(id: number, newCourseNumber: string){
    this.courses.update(courses =>
      courses.map(c => c.id === id ? {...c, courseNumber: newCourseNumber} : c)
    );
  }

  updateTitle(id: number, newTitle: string){
    this.courses.update(courses =>
      courses.map(c => c.id === id ? {...c, title: newTitle} : c)
    );
  }

  updateInstructor(id: number, newInstructor: string){
    this.courses.update(courses =>
      courses.map(c => c.id === id ? {...c, instructor: newInstructor} : c)
    );
  }

  updateGrade(id: number, newGrade: string){
    this.courses.update(courses =>
      courses.map(t => t.id === id ? {...t, grade: newGrade} : t)
    )
  }
}
