import { Component, OnInit } from '@angular/core';
import {CommentService} from '../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss'],
})
export class AllCommentsComponent implements OnInit {

  comments;
  constructor(private commentService: CommentService) {
    commentService.getAllComments()
        .subscribe(value => this.comments = value);
  }

  ngOnInit() {}

}
