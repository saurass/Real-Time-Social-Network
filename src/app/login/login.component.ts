import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
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

}
