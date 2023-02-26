import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page';
import { UserPageComponent } from './user-page/user-page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesPage } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesPage],
  bootstrap: [AppComponent]
})
export class AppModule { }
