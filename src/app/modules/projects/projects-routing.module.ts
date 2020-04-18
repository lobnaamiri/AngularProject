import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ListProjectComponent} from './list-project/list-project.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {ViewProjectComponent} from './view-project/view-project.component';
import {ViewStatisticsComponent} from './view-statistics/view-statistics.component';


const routes: Routes = [
  { path: '', component: ListProjectComponent},
  { path: 'add', component: AddProjectComponent },
  { path: 'view/:id', component: ViewProjectComponent},
  { path: 'viewStat/:id', component: ViewStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
