import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  loginForm: FormGroup;

  username: FormControl;
  password: FormControl;

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
  }

  createFormControl() {

    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createFormGroup() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  signIn() {
    this.authService.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

}
