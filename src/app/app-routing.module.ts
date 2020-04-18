import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) }, { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) }, { path: 'statistics', loadChildren: () => import('./modules/statistics/statistics.module').then(m => m.StatisticsModule) },  { path: 'task', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
