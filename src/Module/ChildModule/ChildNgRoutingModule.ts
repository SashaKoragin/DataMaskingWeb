import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInventar } from 'src/app/Security/Model/SecurityModel';

const appRoutes: Routes = [
  {
    path: '',
   // component: MainChildOtdel,
    canActivate: [AuthInventar],
    children: [

    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class ChildNgRoutingAutoModule { }
