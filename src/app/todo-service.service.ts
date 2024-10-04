import { Injectable } from "@angular/core";
import { Todo } from "./todo";

@Injectable({
	providedIn: "root",
})
export class TodoServiceService {
	private todos: Todo[] = [];

	getTodo() {
		return this.todos;
	}

	addTodo(todoItem: Todo) {
		this.todos.unshift(todoItem);
		this.saveTodos();
	}

	modifyTodo(id: number, updatedTodo: Todo) {
		// Find the existing todo by its id
		const todoIndex = this.todos.findIndex((todo) => todo.id === id);

		// If the todo is found, update its properties
		if (todoIndex !== -1) {
			const existingTodo = this.todos[todoIndex];

			// Use the spread operator to update only the provided properties
			this.todos[todoIndex] = {
				...existingTodo,
				...updatedTodo,
			};
			// Save the updated todos array to local storage
			this.saveTodos();
		}
	}

	removeTodo(index: number) {
		this.todos.splice(index, 1);
		this.saveTodos();
	}

	saveTodos() {
		localStorage.setItem("Todo", JSON.stringify(this.todos));
	}

	loadTodos() {
		const personFromStorage = JSON.parse(localStorage.getItem("Todo") || "[]") as Todo[];

		if (personFromStorage) {
			this.todos = personFromStorage.map((item) => ({
				...item, // Spread the existing properties
				id: item.id, // Keep the existing id
				title: item.title,
				description: item.description,
				completed: item.completed,
			}));
		}
	}

	constructor() {}
}
