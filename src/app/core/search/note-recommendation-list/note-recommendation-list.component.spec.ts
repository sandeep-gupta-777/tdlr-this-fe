import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRecommendationListComponent } from './note-recommendation-list.component';

describe('NoteRecommendationListComponent', () => {
  let component: NoteRecommendationListComponent;
  let fixture: ComponentFixture<NoteRecommendationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRecommendationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRecommendationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
