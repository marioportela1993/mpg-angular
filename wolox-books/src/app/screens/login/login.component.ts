import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service: UserService, 
    private router: Router, 
    private localStorage: LocalStorageService
  ) {
    this.form = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
   }
  
  signIn(post: any){
    const session = {
      email: post.email,
      password: post.password
    }

    this.service.signUpUser({ session }).subscribe(
      response => this.localStorage.setValue('token', response.access_token), 
      () => console.log('error login the user'), 
      () => this.sendToAuth()
    );
  }

  sendToSignUp() {
    this.router.navigate(['sign-up']);
  }

  sendToAuth() {
    this.router.navigate(['auth']);
  }
}
