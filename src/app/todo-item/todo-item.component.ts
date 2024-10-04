import { Component, inject } from "@angular/core";
import { TodoServiceService } from "../todo-service.service";
import { Todo } from "../todo";
import { CommonModule } from "@angular/common";
import { TodoItemPopupService } from "../todo-item-popup.service";
import { TodoItemPopupComponent } from "../todo-item-popup/todo-item-popup.component";
@Component({
	selector: "app-todo-item",
	standalone: true,
	imports: [CommonModule, TodoItemPopupComponent],
	templateUrl: "./todo-item.component.html",
	styleUrl: "./todo-item.component.scss",
})
export class TodoItemComponent {
	todoItemList = inject(TodoServiceService);
	selectedTodo = inject(TodoItemPopupService);

	todoItems: Todo[] = this.todoItemList.getTodo();

	viewTodo(index: number) {
		this.selectedTodo.viewTodo(index, this.todoItems);
		this.selectedTodo.updateFormWithSelectedTodo();
	}

	closeModal() {
		this.selectedTodo.closeModal();
	}

	completeTodo(index: number) {
		this.todoItems[index].completed = !this.todoItems[index].completed;
		this.todoItemList.saveTodos();
	}

	removeTodoItem(index: number) {
		this.todoItemList.removeTodo(index);
	}
}
