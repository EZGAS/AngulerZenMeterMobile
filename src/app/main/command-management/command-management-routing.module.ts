import { CommandManagementComponent } from './command-management.component';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: CommandManagementComponent


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandManagementRoutingModule { }
