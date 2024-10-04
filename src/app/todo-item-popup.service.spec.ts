import { TestBed } from '@angular/core/testing';

import { TodoItemPopupService } from './todo-item-popup.service';

describe('TodoItemPopupService', () => {
  let service: TodoItemPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoItemPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
