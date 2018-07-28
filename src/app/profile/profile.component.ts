import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ChatRoomService} from '../services/chat-room.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private chatService: ChatRoomService) {
  }

  allRooms: string[] = [];

  private userDetails = this.authService.getUserDetails();

  ngOnInit() {
    this.chatService.getAllRooms().subscribe((data) => {
      data.forEach(ele => {
        this.allRooms.push(ele.roomName);
      });
    });
  }

}
