import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model'; // Adjust the path as necessary

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  //variable to hold the data
  posts?: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  //method called initData
  initData(): void {
    this.http.get<Post[]>('https://localhost:7140/api/Post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        },
        error: (err) => {
          console.error('Error fetching posts', err);
        }
      });
  }
}
