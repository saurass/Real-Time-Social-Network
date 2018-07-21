import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenPayload, TokenResponse, User, UserDetails} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators/map';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  // signUp(user: User): Observable<User> {
  //   return this.http.post<User>('/api/signup', user);
  // }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post' | 'get', type, user?: User): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: User): Observable<any> {
    return this.request('post', 'signup', user);
  }

  public login(user: User): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

}
