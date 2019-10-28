import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './screens/unauth/screens/sign-up/sign-up.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    AuthComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthGuard, UnauthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
