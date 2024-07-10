import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.authService.isLoggedIn = true;
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.http.post<LoginPostData>("https://localhost:7140/api/Login/api/Login/login", { username, password })
      .subscribe((data) => {
        this.tokenStorage.saveToken(data.id_token);
        this.tokenStorage.saveUser(data.id);
        this.router.navigate([this.authService.redirectUrl]);
        window.location.reload();
      });
  }
}

export interface LoginPostData {
  id_token: string;
  id: number;
}
