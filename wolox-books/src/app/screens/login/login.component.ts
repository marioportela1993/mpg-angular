import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) {
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
      response => console.log(response.access_token), () => console.log('error login the user'));
  }

  sendToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
