import { Component } from '@angular/core';

interface Task {
  title: string;
  isCompleted: boolean;
  isEditing: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tasks: Task[] = [];
  newTask: string = '';


  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({
        title: this.newTask.trim(),
        isCompleted: false,
        isEditing: false,
      });
      this.newTask = '';
    }
  }

  editTask(index: number): void {
    this.tasks[index].isEditing = true;
  }

  saveTask(index: number): void {
    if (this.tasks[index].title.trim()) {
      this.tasks[index].title = this.tasks[index].title.trim();
      this.tasks[index].isEditing = false;
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  updateCompletion(): void {
    // Trigger change detection if needed
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.isCompleted).length;
  }

  get completionPercentage(): number {
    if (this.tasks.length === 0) return 0;
    return Math.round((this.completedTasks / this.tasks.length) * 100);
  }
  
}
