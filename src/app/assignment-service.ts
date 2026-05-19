import { Injectable, signal } from '@angular/core';
import { Assignment } from './assignment';

//id, name, className, dueDate, isComplete
const initialItems: Assignment[] = [
  {id: 1, name: "Angular project", className: "Software Development", category: "Final", dueDate: "5/15/2026", isComplete: false},
  {id: 2, name: "C# backend", className: "Software Development", category: "Final", dueDate: "5/15/2026", isComplete: false},
  {id: 3, name: "SQLite database", className: "Software Development", category: "Final", dueDate: "5/15/2026", isComplete: false},
]
@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  assignments = signal<Assignment[]>(initialItems);

  getAssignments(){
    return this.assignments;
  }

  getAssignment(id: number): Assignment | undefined{
    return this.assignments().find((assignment) => assignment.id === id);
  }

  addAssignment(newAssignment: Assignment): void{
    this.assignments.update(assignments => [
      ...assignments, newAssignment]
    );
  }


  updateName(id: number, newName: string): void{
    this.assignments.update(assignments =>
      assignments.map(a => a.id === id ? {...a, name: newName} : a)
    );
  }
  
  updateClass(id: number, newClass: string): void{
    this.assignments.update(assignments =>
      assignments.map(a => a.id === id ? {...a, className: newClass} : a)
    );
  }

  updateCategory(id: number, newCategory: string){
    this.assignments.update(assignments =>
      assignments.map(a => a.id === id ? {...a, category: newCategory} : a)
    );
  }

  updateDueDate(id: number, newDue: string): void{
    this.assignments.update(assignments =>
      assignments.map(a => a.id === id ? {...a, dueDate: newDue} : a)
    );
  }

  deleteAssignment(id: number): void{
    this.assignments.update(assignments => assignments.filter(t => t.id !== id));

  }

  toggleComplete(id: number){
    this.assignments.update(assignments =>
      assignments.map(a => a.id === id ? {...a, isComplete: !a.isComplete} : a)
    );
  }
}
