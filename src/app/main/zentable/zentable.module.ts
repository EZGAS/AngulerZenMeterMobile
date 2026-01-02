import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZentableRoutingModule } from './zentable-routing.module';
import { ZentableComponent } from './zentable.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    ZentableComponent
  ],
  imports: [
    CommonModule,
    ZentableRoutingModule,
    ShareModule
  ]
})
export class ZentableModule { }
