import { Injectable } from "@angular/core";
import { Todo } from "./todo";
import { FormGroup, FormControl } from "@angular/forms";

@Injectable({
	providedIn: "root",
})
export class TodoItemPopupService {
	constructor() {}

	private selectedTodo: Todo = { id: -1, title: "", description: "", completed: false };

	private todoFormService: FormGroup = new FormGroup({
		title: new FormControl(""),
		desc: new FormControl(""),
	});

	updateFormWithSelectedTodo() {
		if (this.selectedTodo.id !== -1) {
			this.todoForm.patchValue({
				title: this.selectedTodo.title,
				desc: this.selectedTodo.description,
			});
		}
	}
	
	get todoForm(): FormGroup{
		return this.todoFormService;
	}

	get todo(): Todo {
		return this.selectedTodo;
	}

	viewTodo(index: number, todoItems: Todo[]) {
		this.selectedTodo = todoItems[index];
	}

	closeModal() {
		this.selectedTodo = { id: -1, title: "", description: "", completed: false };
	}
}
