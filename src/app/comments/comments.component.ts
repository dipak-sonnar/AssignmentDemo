import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

/*
   This component will fetch all comments for selected post and will show details.

   please note- we can show this comments section as overlay, expanded section or side bar etc. because of timelimit i used existing router outlet.
*/ 

export class CommentsComponent implements OnInit {

  postId: any;
  comments: any;
  showSpinner = true;

  constructor(private data: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.postId = params['id'];
        this.getComments();
      }
    )
  }

  getComments() {
    this.data.getComments(this.postId).subscribe(
      (data: any) => {
        this.comments = data,
        this.showSpinner = false;
      }
    );
  }

}
