import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = new Array<Post>();

  constructor(private service: PostService) { }

  ngOnInit(): void {

    this.service.getPosts().subscribe(response => {
      this.posts = response.map(item => {
        return new Post(
          item.id,
          item.name,
          item.title,
          item.salary
        );
      });
    });
  }

}


