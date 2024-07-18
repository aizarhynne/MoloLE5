import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

    //This would take the ID based off of the URL of the page
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id =  params['id']; 
    });
    this.initData();
  }

  //initData Method to get the data from the API
  initData(): void {
    this.http.get<Post>("https://localhost:7140/api/post/" + this.id).subscribe({
      next: (data: Post) => {
        this.post = data;
        console.log(this.post);
      },
      error: (err) => {
        console.error('Error fetching post', err);
      }
    });
  }
}
