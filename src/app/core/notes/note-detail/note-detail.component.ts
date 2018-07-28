import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';import {Observable} from 'rxjs';
import { ServerService } from '../../../server.service';
import { ConstantService } from '../../../constant.service';
import { INote } from '../../../../interfaces/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note$: Observable<{ statusCode: string; description: string, body: INote }>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private constantService: ConstantService,
  ) {
  }

  ngOnInit() {
    let note_id: string = this.activatedRoute.snapshot.paramMap.get('_id');
    this.note$ = this.serverService.makeGetReq({url: this.constantService.getNoteUrl(note_id)})
    this.note$
      .subscribe((value: any) => {
        console.log(value);
      });
  }

}
