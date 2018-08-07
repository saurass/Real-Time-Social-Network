import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SocketService} from '../services/socket.service';
import {Socket} from 'ng-socket-io';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private socketService: SocketService, private socket: Socket) {
  }

  messageForm: FormGroup;
  messageText: FormControl;

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
    this.initializeSocket();
    this.socketService.getMessage();
  }

  createFormControl() {
    this.messageText = new FormControl('', [
      Validators.minLength(1),
      Validators.required
    ]);
  }

  createFormGroup() {
    this.messageForm = new FormGroup({
      messageText: this.messageText
    });
  }

  sendMessage() {
    const data: any = {
      room: this.route.params._value.roomName,
      message: this.messageForm.value.messageText
    };
    this.socketService.sendMessage(data);
  }

  initializeSocket() {
    const params: any = {room: this.route.params._value.roomName};
    this.socket.on('connect', () => {
      // console.log(this.socket.ioSocket.id);
      this.socket.emit('join', params, function () {
        // console.log('I joined this channel now !!');
      });
    });
  }

}
