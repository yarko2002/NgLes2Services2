import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  showComments(id: number): void {
    this.postService.commentsOfPost(id).subscribe(value => console.log(value));
  }
}
