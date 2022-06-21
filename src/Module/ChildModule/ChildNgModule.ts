import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ConnectionString } from 'src/app/TransportModule/ConnectionString/Ts/ConnectionString';
import { MainChildBlok } from 'src/app/TransportModule/MainChild/Model/MainChild';
import { Users } from 'src/app/TransportModule/Users/Users/Ts/Users';
import { AngularMaterialModule } from '../MatrialModule/MatrialModule';


import { ChildNgRoutingAutoModule } from './ChildNgRoutingModule';

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    ChildNgRoutingAutoModule,
    NgxPermissionsModule,
    ReactiveFormsModule
  ],
  declarations: [MainChildBlok,Users,ConnectionString],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ChildNgAutoModule { }
