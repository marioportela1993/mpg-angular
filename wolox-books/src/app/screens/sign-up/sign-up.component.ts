import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
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
      password_confirmation: post.password
    };
    console.log({ user });
  }

  ngOnInit() {
  }

}
