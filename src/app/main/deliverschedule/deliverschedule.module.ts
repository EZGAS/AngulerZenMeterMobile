import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliverscheduleRoutingModule } from './deliverschedule-routing.module';
import { AddComponent } from './add/add.component';
import { QuaryComponent } from './quary/quary.component';
import { DeliverscheduleComponent } from './deliverschedule.component';
import { ShareModule } from 'src/app/share/share.module';
import { DatakeyinComponent } from './datakeyin/datakeyin.component';


@NgModule({
  declarations: [
    AddComponent,
    QuaryComponent,
    DeliverscheduleComponent,
    DatakeyinComponent
  ],
  imports: [
    CommonModule,
    DeliverscheduleRoutingModule,
    ShareModule,
  ]
})
export class DeliverscheduleModule { }
