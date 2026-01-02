import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagerRoutingModule } from './customer-manager-routing.module';

import { share } from 'rxjs';
import { ShareModule } from 'src/app/share/share.module';
import { CustomerManagerComponent } from './customer-manager/customer-manager.component';
import { CusterUpdateComponent } from './custer-update/custer-update.component';


@NgModule({
  declarations: [
    CustomerManagerComponent,
    CusterUpdateComponent
  ],
  imports: [
    CommonModule,
    CustomerManagerRoutingModule,
    ShareModule
  ]
})
export class CustomerManagerModule { }
