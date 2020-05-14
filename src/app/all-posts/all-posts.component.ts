import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
posts;
  constructor(private postService: PostService) {
    postService.getAllPosts()
        .subscribe(value => this.posts = value);
        }

  ngOnInit() {}

}
