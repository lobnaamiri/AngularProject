import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {of} from 'rxjs';

interface observable<T> {
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[];

  constructor() {
  }

  public addUser(user: User) {
    this.user.push(user);
  }

  public updateUser(user: User) {
    const index = this.user.findIndex(curent => curent.username === user.username);
    this.user[index] = Object.assign(this.user[index], user);
  }

  public deleteUser(username: string) {
    const index = this.user.findIndex(curent => curent.username === username);
    const deleteItem = this.user.splice(index, 1);
  }

  public findUser(username: string): User {
    const ser = this.user.find(curent => curent.username === username);
    return Object.assign(new User('',
      '', '', '', '', ''), ser);

  }
  get allUser(): Array<User> {
    return this.user;
}
}
