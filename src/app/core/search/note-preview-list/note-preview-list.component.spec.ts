import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePreviewListComponent } from './note-preview-list.component';

describe('NotePreviewListComponent', () => {
  let component: NotePreviewListComponent;
  let fixture: ComponentFixture<NotePreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
