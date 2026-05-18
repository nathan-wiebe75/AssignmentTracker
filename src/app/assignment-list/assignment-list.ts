import { Component, input } from '@angular/core';
import { Assignment } from '../assignment';

@Component({
  selector: 'app-assignment-list',
  imports: [],
  templateUrl: './assignment-list.html',
  styleUrl: './assignment-list.css',
})
export class AssignmentList {
  assignments = input.required<Assignment>();
}
