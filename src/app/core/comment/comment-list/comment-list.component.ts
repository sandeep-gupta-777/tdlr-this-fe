import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServerService} from '../../../server.service';
import {ConstantService} from '../../../constant.service';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IUser} from '../../../../interfaces/user';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {IComment} from '../../../../interfaces/comment';
import {NewCommentComponent} from '../new-comment/new-comment.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Select() loggeduser$: Observable<IAuthState>;
  @ViewChild(NewCommentComponent) newCommentComponent:NewCommentComponent;
  @Input() commentList: IComment[];
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

  createComment(body) {
    let url = this.constantService.getNewCommentCreationUrl(this.post_id);
    this.serverService.makePutReq({url, body})
      .subscribe((value) => {
        this.commentList.push(body);
        this.newCommentComponent.f.form.reset();
      });
  }


}
