import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[];
  posts: Post[];
 // constructor(private userService: UserService){
 //   userService.getUsers().subscribe(value => this.users = value);
 // }
  constructor(private postService: PostService){
    postService.posts().subscribe(value => this.posts = value);
  }
}
