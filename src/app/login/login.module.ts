import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginIndexComponent } from './login-index.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    LoginIndexComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ]
})
export class LoginModule { }
