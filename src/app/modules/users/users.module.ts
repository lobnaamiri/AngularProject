import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-users/add-user.component';
import { ListUserComponent } from './list-users/list-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import {SharedModule} from '../../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CheckPasswordDirective } from './check-password.directive';


@NgModule({
  declarations: [UsersComponent, AddUserComponent, ListUserComponent, ViewUsersComponent, CheckPasswordDirective],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatFormFieldModule
  ]
})
export class UsersModule { }
