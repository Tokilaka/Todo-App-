import { Component, inject } from "@angular/core";
import { TodoServiceService } from "../todo-service.service";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Todo } from "../todo";

@Component({
	selector: "app-todo-input",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./todo-input.component.html",
	styleUrl: "./todo-input.component.scss",
})
export class TodoInputComponent {
	todoForm = new FormGroup({
		title: new FormControl(""),
		desc: new FormControl(""),
	});

	todoService = inject(TodoServiceService);
	count: number = 0;

	submitTodo() {
		if (this.todoForm.value.title === "") return;
		this.count++;

		// Create a new todo item for each submission
		const newTodoItem: Todo = {
			id: this.count,
			title: this.todoForm.value.title ?? "",
			description: this.todoForm.value.desc ?? "",
			completed: false,
		};

		// Add the newly created todo item
		this.todoService.addTodo(newTodoItem);

		// Optionally, clear the form after submission
		this.todoForm.reset();
	}
}
