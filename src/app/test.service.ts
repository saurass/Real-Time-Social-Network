import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {
  }

  testCmd(): Observable<any> {
    return this.http.get<any>('/api/');
  }

}
