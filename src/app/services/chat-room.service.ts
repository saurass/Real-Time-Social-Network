import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {Room} from '../models/room';

@Injectable()
export class ChatRoomService {

  constructor(private authService: AuthService) {
  }

  createChatRoom(room: Room): Observable<any> {
    return this.authService.request('post', 'createChatRoom', room);
  }

  getAllRooms(): Observable<any> {
    return this.authService.request('get', 'getAllRooms');
  }

}
