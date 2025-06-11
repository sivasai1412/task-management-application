import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-upcoming-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upcoming-tasks.component.html',
  styleUrls: ['./upcoming-tasks.css']
})
export class UpcomingTasksComponent implements OnInit {
  tasks: Task[] = [];
  selectedPriority: string = '';

  editMode: boolean = false;
  currentTask: Task = {} as Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      if (this.selectedPriority) {
        this.tasks = data.filter(task => task.priority === this.selectedPriority);
      } else {
        this.tasks = data;
      }
    });
  }

  editTask(task: Task): void {
    this.editMode = true;
    this.currentTask = { ...task };
  }

  deleteTask(id: string): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
  }

  submitTask(): void {
    if (this.editMode) {
      this.taskService.updateTask(this.currentTask.id, this.currentTask).subscribe(() => {
        this.editMode = false;
        this.currentTask = {} as Task;
        this.loadTasks();
      });
    } else {
      this.taskService.createTask(this.currentTask).subscribe(() => {
        this.currentTask = {} as Task;
        this.loadTasks();
      });
    }
  }
}
