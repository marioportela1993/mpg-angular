import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService) {
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
    };
    console.log({ user });

    this.service.createUser({ user }).subscribe(
      response => console.log(`Response: ${JSON.stringify(response)}`), error => console.log(error), () => console.log('fd'));
  }
}
