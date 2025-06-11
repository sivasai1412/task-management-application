import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-upcoming-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upcoming-tasks.component.html'
})
export class UpcomingTasksComponent implements OnInit {
  tasks: Task[] = [];
  selectedPriority: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      // Apply frontend filtering for now
      if (this.selectedPriority) {
        this.tasks = data.filter(task => task.priority === this.selectedPriority);
      } else {
        this.tasks = data;
      }
    });
  }
}
