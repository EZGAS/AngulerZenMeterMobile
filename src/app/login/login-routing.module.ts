import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginIndexComponent } from './login-index.component';

const routes: Routes = [
  {
    path: '', component: LoginIndexComponent, // domain/login
  },
  {
    path: 'main', loadChildren: () => import('../main/main.module').then(m => m.MainModule)
  },
  {
    path: 'login', component: LoginIndexComponent, // domain/login/login
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
