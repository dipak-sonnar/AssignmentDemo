import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

/*
   This component will fetch all user details and will show there name on button.
*/ 
export class UsersComponent implements OnInit {

  users: any;
  posts: any;
  isLoaded = false;
  showSpinner = true;

  constructor(private data: UserService) { }

  ngOnInit() {
    this.data.getAllUser().subscribe(
      (data: any) => {
        this.users = data,
        this.showSpinner = false //Hide the spinner once data loaded
      }
    );
  }


}
