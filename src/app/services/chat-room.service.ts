import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {Room} from '../models/room';
import {map} from 'rxjs/operators';
import {TokenResponse} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChatRoomService {

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  createChatRoom(room: Room): Observable<any> {
    return this.request('post', 'createChatRoom', room);
  }

  getAllRooms(): Observable<any> {
    return this.request('get', 'getAllRooms');
  }

  public request(method: 'post' | 'get', type, user?: any): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user, {headers: {Authorization: `Bearer ${this.authService.getToken()}`}});
    } else {
      base = this.http.get(`/api/${type}`, {headers: {Authorization: `Bearer ${this.authService.getToken()}`}});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.authService.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

}
