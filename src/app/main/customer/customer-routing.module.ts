import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerModule } from './customer.module';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
