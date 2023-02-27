import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page';
import { UserPageComponent } from './user-page/user-page';
import { ServicesPage } from './services/services';
import { DataService  } from './services/data-service';
import { ModalComponent } from './modal/new-post-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ServicesPage, DataService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule { }
