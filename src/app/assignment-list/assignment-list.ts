import { Component, input, inject } from '@angular/core';
import { Assignment } from '../assignment';
import { AssignmentService } from '../assignment-service';
import { AssignmentItem } from '../assignment-item/assignment-item';

@Component({
  selector: 'app-assignment-list',
  imports: [AssignmentItem],
  templateUrl: './assignment-list.html',
  styleUrl: './assignment-list.css',
})
export class AssignmentList {
  assignmentService = inject(AssignmentService);

  assignments = this.assignmentService.assignments;

  deleteAssignment(id: number): void{
    this.assignmentService.deleteAssignment(id);
  }

  toggleComplete(id: number): void{
    this.assignmentService.toggleComplete(id);
  }
}
