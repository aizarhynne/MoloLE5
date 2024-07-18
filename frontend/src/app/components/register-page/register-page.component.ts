import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const { username, password, firstName, lastName } = this.form;

    console.log(this.form);

    this.http.post("https://localhost:7140/api/Login/api/Login/register", this.form, { responseType: 'text' })
      .subscribe(data => {
        this.router.navigate(['/login']);
      });
  }
}
