import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/unauth/screens/sign-up/sign-up.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'books',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
