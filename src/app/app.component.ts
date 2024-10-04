import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from "./todo-item/todo-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoInputComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
