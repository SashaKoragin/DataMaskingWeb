import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInventar } from 'src/app/Security/Model/SecurityModel';
import { ConnectionString } from 'src/app/TransportModule/ConnectionString/Ts/ConnectionString';
import { MainChildBlok } from 'src/app/TransportModule/MainChild/Model/MainChild';
import { Users } from 'src/app/TransportModule/Users/Users/Ts/Users';

const appRoutes: Routes = [
  {
    path: '',
    component: MainChildBlok,
    canActivate: [AuthInventar],
    children: [
       {
         path: 'Users',
         component: Users
       },       
       {
        path: 'ConnectionString',
        component: ConnectionString
       }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class ChildNgRoutingAutoModule { }
