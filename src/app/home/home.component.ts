import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignupService} from '../services/signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: SignupService, private router: Router) {
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

  signUp() {
    this.userService.signUp(this.myForm.value).subscribe(
      res => {
        this.router.navigate(['/profile']);
      },
      error => {
        console.log('failed');
      }
    );
  }

}
