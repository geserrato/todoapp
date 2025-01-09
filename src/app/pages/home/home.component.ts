import { JsonPipe, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [NgFor, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false,
    },
    {
      id: Date.now() + 1,
      title: 'Crear Componentes',
      completed: false,
    },
    {
      id: Date.now() + 2,
      title: 'Crear Servicios',
      completed: false,
    },
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value = '';
  }

  addTask(value: string) {
    const newTask = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((tasks, i) => i !== index));
  }

  updateTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }
}
