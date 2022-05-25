import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

/*
   This component will fetch all post details for selected user. First it will show 3 post and on click of load more will show all.
*/ 
export class PostsComponent implements OnInit {

  userId$: any;
  posts: any;
  currentIndex = 3;
  showAllFlag = false;
  showSpinner = true;

  constructor(private data: UserService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.userId$ = params['id'];
        this.getPosts();
      }
    )

  }

  getPosts() {
    this.data.getAllPosts(this.userId$).subscribe(
      (data: any) => {
        this.posts = data,
        this.showSpinner = false
      }
    );
  }

  loadAll() {
    this.showAllFlag = true;
  }
}
