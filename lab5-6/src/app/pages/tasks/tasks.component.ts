import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../modules/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showForm = false;

  taskForm = new FormGroup({
    type: new FormControl<'bug' | 'task'>('task', Validators.required),
    priority: new FormControl<'critical' | 'high' | 'medium' | 'low' | null>(null),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    assignee: new FormControl(''),
    creator: new FormControl('', Validators.required),
    status: new FormControl<'to-do' | 'in-progress' | 'done'>('to-do', Validators.required)
  });

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  addTask() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value as any);
      this.taskForm.reset({
        type: 'task',
        status: 'to-do'
      });
      this.showForm = false;
    }
  }

  toggleStatus(task: Task) {
    const newStatus = task.status === 'to-do' ? 'in-progress' : 
                     task.status === 'in-progress' ? 'done' : 'to-do';
    this.taskService.updateTask(task.id, { status: newStatus });
  }

  getPriorityLabel(priority: string): string {
    const priorities: Record<string, string> = {
      'critical': 'Критический',
      'high': 'Высокий',
      'medium': 'Средний',
      'low': 'Низкий'
    };
    return priorities[priority] || priority;
  }
  
  getStatusLabel(status: string): string {
    const statuses: Record<string, string> = {
      'to-do': 'К выполнению',
      'in-progress': 'В работе',
      'done': 'Выполнено'
    };
    return statuses[status] || status;
  }
}