import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user';
import {UserService} from '../../../core/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User(
    '',
    '',
    '',
    '',
    '',
    ''
);
  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  public submit() {
    this.userService.addUser(this.user);
  }
}
