import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'projects/user/src/app/material/material.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListTasksComponent,
    AddTaskComponent,
    ConfirmationComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    TasksAdminRoutingModule,
    SharedModule
  ]
})
export class TasksAdminModule { }
