import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, EmailValidator} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  myForm: FormGroup;

  email: FormControl;
  username: FormControl;
  password: FormControl;
  cnfpass: FormControl;

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
  }

  createFormControl() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.email
    ]);

    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

    this.cnfpass = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createFormGroup() {
    this.myForm = new FormGroup({
      email: this.email,
      username: this.username,
      password: this.password,
      cnfpass: this.cnfpass
    });
  }

}
