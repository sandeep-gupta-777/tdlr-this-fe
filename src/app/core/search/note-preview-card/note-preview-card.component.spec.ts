import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePreviewCardComponent } from './note-preview-card.component';

describe('NotePreviewCardComponent', () => {
  let component: NotePreviewCardComponent;
  let fixture: ComponentFixture<NotePreviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePreviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
