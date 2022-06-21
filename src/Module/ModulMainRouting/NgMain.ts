import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MainComponent } from 'src/app/Main/Ts/Main';
import { AppRoutingModule } from './RoutingMain';

import { AuthModule } from '../MainLogin/NgAuth';
import { AngularMaterialModule } from '../MatrialModule/MatrialModule';
import { AuthIdentificationSignalR } from 'src/ApiJava/RequestService/RequestService';
import { SignalRConfiguration, SignalRModule } from 'ng2-signalr';
import { ServerHost } from 'src/ApiJava/ApiService/ApiService';

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.logging = true;
  c.url = `http://${ServerHost}:8059/signalr`;
  return c;
}


@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    AngularMaterialModule,
    SignalRModule.forRoot(createConfig),
   

  ],
  providers:[AuthIdentificationSignalR],
  declarations: [
    MainComponent
  ],
  bootstrap: [MainComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
