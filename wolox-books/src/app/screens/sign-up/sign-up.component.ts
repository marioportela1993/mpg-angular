import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) {
    this.form = fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
   }
  
  signUp(post: any){
    const user = {
      first_name: post.firstName,
      last_name: post.lastName,
      email: post.email,
      password: post.password,
      password_confirmation: post.password,
      locale: 'en'
    }

    this.service.createUser({ user }).subscribe(
      response => console.log(`User ${JSON.stringify(response)} created successfully`), () => console.log('error signing up the user'), () => {
        this.sendToLogin();
      });
  }

  sendToLogin() {
    this.router.navigate(['login']);
  }
}
