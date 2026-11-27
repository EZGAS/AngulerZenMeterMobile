import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryhistoryRoutingModule } from './deliveryhistory-routing.module';
import { AddComponent } from './add/add.component';
import { QuaryComponent } from './quary/quary.component';
import { UpdateComponent } from './update/update.component';
import { DeliveryhistoryComponent } from './deliveryhistory.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    AddComponent,
    QuaryComponent,
    UpdateComponent,
    DeliveryhistoryComponent
  ],
  imports: [
    CommonModule,
    DeliveryhistoryRoutingModule,
    ShareModule,
  ]
})
export class DeliveryhistoryModule { }
