import { TestBed } from '@angular/core/testing';

import { DragMoveService } from './drag-move.service';

describe('DragMoveService', () => {
  let service: DragMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
