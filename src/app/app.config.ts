import { ApplicationConfig, APP_INITIALIZER } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { TodoServiceService } from "./todo-service.service";
import { initializeApp } from "./app.initialize";

export const appConfig: ApplicationConfig = {
	providers: [
		TodoServiceService, // Your to-do service
		provideHttpClient(),
		{
			provide: APP_INITIALIZER, // Provide the APP_INITIALIZER token
			useFactory: initializeApp, // The initialization function
			deps: [TodoServiceService], // The service(s) required
			multi: true, // Allows multiple initializers if needed
		},
	],
};
