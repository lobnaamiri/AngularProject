import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[];

  constructor(private httpClient: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}users`)
      .pipe(map(result => result._embedded.users));
  }

  public addUser(user: User) {
    this.httpClient.post(`${environment.urlBackend}users/`, user).subscribe();
  }
}
