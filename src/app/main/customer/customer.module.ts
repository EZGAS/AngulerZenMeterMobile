import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [
    CustomerComponent,

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ShareModule
  ]
})
export class CustomerModule { }
