import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { KanbanComponent } from './kanban/kanban.component';


@NgModule({
  declarations: [TaskComponent, AddTaskComponent, ListTaskComponent, ViewTaskComponent, KanbanComponent],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
