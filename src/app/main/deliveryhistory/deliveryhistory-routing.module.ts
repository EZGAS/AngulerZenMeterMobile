import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryhistoryComponent } from './deliveryhistory.component';
import { QuaryComponent } from './quary/quary.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [{
  path: '', component: DeliveryhistoryComponent,
  children: [
    {
      path: '', redirectTo: 'query', pathMatch: 'full'
    },
    {
      path: 'add', component: AddComponent
    },
    {
      path: 'query', component: QuaryComponent
    },
    {
      path: 'update', component: UpdateComponent
    },

    // {
    //   path: 'del/:id', component: UpdateComponent
    // },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryhistoryRoutingModule { }
