import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../../material/material.module';
import { TaskDetailsComponent } from './components/task-details/task-details.component';


@NgModule({
  declarations: [
    ListTasksComponent,
        TaskDetailsComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    NgxPaginationModule,
    MaterialModule
  ]
})
export class TasksModule { }
