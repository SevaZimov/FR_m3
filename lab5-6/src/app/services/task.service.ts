import { Injectable } from '@angular/core';
import { Task } from '../modules/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private lastId = 0;

  constructor() {}

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
    const newTask: Task = {
      ...task,
      id: ++this.lastId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, updates: Partial<Task>): Task | null {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return null;

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updates,
      updatedAt: new Date()
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }
}