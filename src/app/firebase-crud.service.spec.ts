import { TestBed, inject } from '@angular/core/testing';

import { NotesCrudService } from './notes-crud.service';

describe('FirebaseCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesCrudService]
    });
  });

  it('should be created', inject([NotesCrudService], (service: NotesCrudService) => {
    expect(service).toBeTruthy();
  }));
});
