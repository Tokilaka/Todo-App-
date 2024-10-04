import { TodoServiceService } from "./todo-service.service";

export function initializeApp(todoService: TodoServiceService) {
	return (): Promise<any> => {
		return new Promise((resolve, reject) => {
			// Simulating loading data from localStorage or an external source
			todoService.loadTodos();

			resolve(true); // Resolve when initialization is complete
		});
	};
}
