import { Component } from '@angular/core';

import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | undefined;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private auth: AuthService,

    private router: Router,
  ) { }

  loginForm = this.formBuilder.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]],
  });

  handleSubmit() {
    const userData = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }

    this.userService.loginUser(userData)
      .subscribe(
        (data) => {
          localStorage.setItem('id', data.id);
          localStorage.setItem('name', data.name);

          this.auth.isLoggedIn = true;
          this.router.navigate(['/home']);
        },
        (err) => {
          this.errorMessage = err.error.error;          
        });
  }
}
