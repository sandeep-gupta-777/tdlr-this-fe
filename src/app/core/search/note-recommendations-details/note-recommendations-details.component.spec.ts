import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRecommendationsDetailsComponent } from './note-recommendations-details.component';

describe('NoteRecommendationsDetailsComponent', () => {
  let component: NoteRecommendationsDetailsComponent;
  let fixture: ComponentFixture<NoteRecommendationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRecommendationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRecommendationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
