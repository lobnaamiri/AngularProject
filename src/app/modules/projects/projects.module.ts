import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';


@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent, ListProjectComponent, ViewProjectComponent, ViewStatisticsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
