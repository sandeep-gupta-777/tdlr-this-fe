import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ServerService} from '../../../server.service';
import {ConstantService} from '../../../constant.service';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {IUser} from '../../../../interfaces/user';
import {IComment} from '../../../../interfaces/comment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @ViewChild('commentForm') f: NgForm;
  @Select() loggeduser$: Observable<IAuthState>;
  @Output() createCommentEvent:EventEmitter<IComment> = new EventEmitter<IComment>();
  loggeduser: IUser;
  post_id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private constantService: ConstantService,
  ) {
  }

  ngOnInit() {
    this.post_id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.loggeduser$.subscribe((authState) => {
      this.loggeduser = authState.user;
    });
  }

  createComment() {
    let formData = this.f.value;
    let body: IComment = {
      ...formData,
      comment_post_id: this.post_id,
      comment_author_name: this.loggeduser.user_name,
      comment_author_avatar_url: this.loggeduser.user_avatar_url,
      comment_created: Date.now(),
    };
    this.createCommentEvent.emit(body);
  }

}
