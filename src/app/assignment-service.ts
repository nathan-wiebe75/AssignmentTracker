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

  addAssignment(assignment: Assignment): void{}

  //updateAssignment(assignment: Assignment){}

  updateName(newName: string): void{
    this.assignment.name = newName;
  }
  
  updateClass(newClass: string): void{
    this.assignment.className = newClass;
  }

  updateDueDate(newDue: string): void{
    this.assignment.dueDate = newDue;
  }

  deleteAssignment(id: number): void{

  }

  toggleComplete(assignment: Assignment){
    if(assignment.isComplete){
      assignment.isComplete = false;
    } else {
      assignment.isComplete = true;
    }
  }
}
