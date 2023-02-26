import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page';
import { UserPageComponent } from './user-page/user-page';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'login-page', component: LoginPageComponent},
  { path: 'user-page', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
