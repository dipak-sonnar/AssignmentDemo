import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAllPosts(userId: string) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
  }

  getComments(postId: string) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId='+ postId);
  }

}