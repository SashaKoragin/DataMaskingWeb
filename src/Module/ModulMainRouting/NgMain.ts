import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { NgxPermissionsModule } from 'ngx-permissions';
import { MainComponent } from 'src/app/Main/Ts/Main';
import { AppRoutingModule } from './RoutingMain';
import { AngularMaterialModule } from '../MaterialModule/matrialModule';
import { AuthModule } from '../MainLogin/NgAuth';


@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    AngularMaterialModule
  ],
  declarations: [
    MainComponent
  ],
  bootstrap: [MainComponent],

})
export class AppModule { }
