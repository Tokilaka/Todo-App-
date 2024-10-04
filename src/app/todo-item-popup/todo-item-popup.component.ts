import { Component, inject } from "@angular/core";
import { TodoItemPopupService } from "../todo-item-popup.service";
import { TodoServiceService } from "../todo-service.service";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { Todo } from "../todo";

@Component({
	selector: "app-todo-item-popup",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./todo-item-popup.component.html",
	styleUrl: "./todo-item-popup.component.scss",
})
export class TodoItemPopupComponent {
	selectedTodo = inject(TodoItemPopupService);
	todoService = inject(TodoServiceService);

	closeModal() {
		this.selectedTodo.closeModal();
	}

	submitTodo() {
		const newTodoItem: Todo = {
			id: this.selectedTodo.todo.id,
			title: this.selectedTodo.todoForm.value.title ?? "",
			description: this.selectedTodo.todoForm.value.desc ?? "",
			completed: this.selectedTodo.todo.completed,
		};

		this.todoService.modifyTodo(this.selectedTodo.todo.id, newTodoItem);

		this.closeModal();
	}
}
