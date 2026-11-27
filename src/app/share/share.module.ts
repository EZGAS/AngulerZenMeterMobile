import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
const zorroModules: any[] = [NzPaginationModule, NzInputNumberModule, NzDatePickerModule, NzTimePickerModule, NzListModule, NzRadioModule, NzMenuModule, NzTableModule, NzIconModule, NzInputModule, NzButtonModule, FormsModule, NzModalModule, NzDrawerModule, NzTabsModule, NzSwitchModule, NzSelectModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    zorroModules
  ],
  exports: [
    zorroModules
  ]
})
export class ShareModule { }
