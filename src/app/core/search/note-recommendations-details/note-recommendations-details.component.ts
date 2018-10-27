import {Component, Input, OnInit} from '@angular/core';
import {INote} from '../../../../interfaces/note';

@Component({
  selector: 'app-note-recommendations-details',
  templateUrl: './note-recommendations-details.component.html',
  styleUrls: ['./note-recommendations-details.component.scss']
})
export class NoteRecommendationsDetailsComponent implements OnInit {

  @Input() note: INote;

  constructor() {
  }

  ngOnInit() {
  }

}
