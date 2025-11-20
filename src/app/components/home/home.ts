import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  tasks: { text: string; done: boolean }[] = [];

  addTask(value: string) {
    const text = (value || '').trim();
    if (!text) return;
    this.tasks.push({ text, done: false });
  }

  toggleDone(task: { text: string; done: boolean }) {
    task.done = !task.done;
  }

  deleteTask(task: { text: string; done: boolean }) {
    const i = this.tasks.indexOf(task);
    if (i >= 0) this.tasks.splice(i, 1);
  }

}
