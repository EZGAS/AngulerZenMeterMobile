import { DatakeyinComponent } from './datakeyin/datakeyin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverscheduleComponent } from './deliverschedule.component';
import { AddComponent } from './add/add.component';
import { QuaryComponent } from './quary/quary.component';

const routes: Routes = [
  {
    path: '', component: DeliverscheduleComponent,
    children: [
      {
        path: '', redirectTo: 'quary', pathMatch: 'full'
      },
      {
        path: 'add', component: AddComponent
      },
      {
        path: 'quary', component: QuaryComponent
      },
      {
        path: 'datakeyin/:scheduleId/:userId', component: DatakeyinComponent
      }

      // {
      //   path: 'del/:id', component: UpdateComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverscheduleRoutingModule { }
