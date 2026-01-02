import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZentableComponent } from './zentable.component';

const routes: Routes = [
  {
    path: '', component: ZentableComponent,
    // children: [
    //   {
    //     path: '', component: ZentableComponent
    //   },


    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZentableRoutingModule { }
