import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from '../../components/list-posts/list-posts.component';
import { PostDetailComponent } from '../../components/post-detail/post-detail.component';
import { LoginPageComponent } from '../../components/login-page/login-page.component';
import { RegisterPageComponent } from '../../components/register-page/register-page.component';

//lines of routes
const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
