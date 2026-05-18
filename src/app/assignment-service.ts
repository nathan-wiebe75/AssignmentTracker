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
    const assignment = this.assignments().find((t) => t.id === id);

    if(assignment){
      assignment.name = newName;
    }
  }
  
  updateClass(id: number, newClass: string): void{
    const assignment = this.assignments().find(t => t.id === id);

    if(assignment){
      assignment.className = newClass;
    }
  }

  updateDueDate(id: number, newDue: string): void{
    const assignment = this.assignments().find(t => t.id === id);

    if(assignment){
      assignment.dueDate = newDue;
    }
  }

  deleteAssignment(id: number): void{
    this.assignments.update(assignments => assignments.filter(t => t.id !== id));

  }

  toggleComplete(id: number){
    const assignment = this.assignments().find(t => t.id === id);

    if(assignment){
      if(assignment.isComplete == true){
        assignment.isComplete = false;
      } else {
        assignment.isComplete = true;
      }
    }
  }
}
