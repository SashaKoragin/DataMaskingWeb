import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './RoutingAuth';
import { Login } from 'src/app/Security/Ts/Security';
import { AngularMaterialModule } from '../MatrialModule/MatrialModule';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AuthModule { }
