import { CustomerComponent } from './customer/customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CustomerManagerModule } from './customer-manager/customer-manager.module';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '', redirectTo: 'zentable', pathMatch: 'full'
      },
      {
        path: 'zentable', loadChildren: () => import('./zentable/zentable.module').then(m => m.ZentableModule)
      },
      {
        path: 'commandManagement', loadChildren: () => import('./command-management/command-management.module').then(m => m.CommandManagementModule)
      },
      {
        path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'customer-manager', loadChildren: () => import('./customer-manager/customer-manager.module').then(m => m.CustomerManagerModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
