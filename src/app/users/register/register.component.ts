import { Component } from '@angular/core';

import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  errorMessage: string | undefined;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private auth: AuthService,

    private router: Router,
  ) { }

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.email]],
    email: ['', [Validators.required, Validators.email]],
    username: ['',[Validators.required]],
    password: ['',[Validators.required]],
    phone_number: ['', [Validators.required]],
    egn: ['',[Validators.required]],
    date_of_creation: ['',[Validators.required]],
  });

  handleSubmit() {
    const userData = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      phoneNumber: this.registerForm.get('phone_number')?.value,
      egn: this.registerForm.get('egn')?.value,
      dateOfCreation: this.registerForm.get('date_of_creation')?.value,
    }

    this.userService.registerUser(userData)
      .subscribe(
        (data) => {
          localStorage.setItem('id', data.id);
          localStorage.setItem('name', data.name);

          this.auth.isLoggedIn = true;
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);

          this.errorMessage = err.error.message;
        });
  }
}