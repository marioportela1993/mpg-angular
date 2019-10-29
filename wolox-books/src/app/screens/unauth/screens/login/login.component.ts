import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD:wolox-books/src/app/screens/unauth/screens/login/login.component.ts
import { UserService } from '../../../../services/user.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
=======
import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';
>>>>>>> angular-login:wolox-books/src/app/screens/login/login.component.ts
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
    private localStorage: LocalStorageService,
    private router: Router
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

  sendToAuth() {
    this.router.navigate(['books']);
  }
}
