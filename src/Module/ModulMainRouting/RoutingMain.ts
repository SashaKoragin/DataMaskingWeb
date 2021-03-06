import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInventar } from 'src/app/Security/Model/SecurityModel';
import { ChildNgAutoModule } from '../ChildModule/ChildNgModule';




const appRoutes: Routes = [
  {
      path: 'App',
      loadChildren: ()=> ChildNgAutoModule,
      canLoad: [AuthInventar],
  }


];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes,
          {
              enableTracing: false // <-- debugging purposes only
          }
      )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
