import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChatRoomService} from '../services/chat-room.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(private chatRoomService: ChatRoomService, private router: Router, private authService: AuthService) {
  }

  newRoomForm: FormGroup;

  roomName: FormControl;

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();

  }

  createFormControl() {
    this.roomName = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]);
  }

  createFormGroup() {
    this.newRoomForm = new FormGroup({
      roomName: this.roomName
    });
  }

  createRoom() {
    this.newRoomForm.value.created_by_id = this.authService.getUserDetails()._id;
    this.chatRoomService.createChatRoom(this.newRoomForm.value).subscribe(() => {
      this.router.navigate(['/profile']);
    }, (err) => {
      alert('something went wrong !!');
      this.router.navigate(['/profile']);
    });
  }

}
