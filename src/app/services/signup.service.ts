import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) {
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>('/api/signup', user);
  }
}
