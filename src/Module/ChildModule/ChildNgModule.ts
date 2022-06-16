import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AngularMaterialModule } from '../MaterialModule/matrialModule';
import { ChildNgRoutingAutoModule } from './ChildNgRoutingModule';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    ChildNgRoutingAutoModule,
    NgxPermissionsModule,
    ReactiveFormsModule
  ],
  declarations: [
 ]


})

export class ChildNgAutoModule { }
