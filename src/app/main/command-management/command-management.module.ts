import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandManagementRoutingModule } from './command-management-routing.module';
import { CommandUpdatComponent } from './command-updat/command-updat.component';
import { ShareModule } from 'src/app/share/share.module';
import { CommandManagementComponent } from './command-management.component';



@NgModule({
  declarations: [
    CommandUpdatComponent,
    CommandManagementComponent,

  ],
  imports: [
    CommonModule,
    CommandManagementRoutingModule,
    ShareModule
  ]
})
export class CommandManagementModule { }
