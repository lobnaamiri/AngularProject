import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ViewUsersComponent} from './view-users/view-users.component';
import {ListUserComponent} from './list-users/list-user.component';
import {AddUserComponent} from './add-users/add-user.component';

const routes: Routes = [
  { path: '', component: ListUserComponent},
  { path: 'add', component: AddUserComponent },
  { path: 'view/:id', component: ViewUsersComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
